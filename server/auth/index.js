const router = require("express").Router();
const { User } = require("../db/models/user");
const bcrypt = require("bcrypt");

function returnPopulatedUser(user, res) {
    User.findOne({_id: user._id}).populate("friends").populate("places").populate({path: "friends", populate: {path: "places", model: "Place"}}).then(populatedUser => {
        res.json(populatedUser);
    });
}

function loggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.sendStatus(403);
    }
}

router.post("/login", async (req, res, next) => {
   await User.findOne({email: req.body.email})
      .then(user => {
          if(!user) res.send("User not found");
          bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
              if (err) {
                  throw err;
              } else if (!isMatch) {
                  console.log("Password doesn't match!");
              } else {
                  req.login(user, err => {
                        if (err) return next(err);
                        returnPopulatedUser(user, res);
                  });
              }
          });
      });
});

router.post("/signup", async (req, res, next) => {
  await User.findOne({email: req.body.email})
      .then(user => {
          if (user) return res.status(400).send("User already exists");
          let password = req.body.password;
          bcrypt.hash(password, 12, (err, hash) => {
              user = new User({
                  username: req.body.username,
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  password: hash
              });

              user.save()
                  .then(() => {
                    req.login(user, err => {
                        if (err) return next(err);
                        returnPopulatedUser(user, res);
                    });
                  })
                  .catch(err => res.status(400).json("Error: " + err));
          });
      });
});

router.route("/logout").post((req, res) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(200);
});

router.route("/me").get(loggedIn, (req, res) => {
    returnPopulatedUser(req.user, res);
});

// TODO: router.use('/google', require('./google'));

module.exports = {
    router, 
    returnPopulatedUser
};