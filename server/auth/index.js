const router = require('express').Router();
const { User } = require('../db/models/user');
const bcrypt = require("bcrypt");
module.exports = router;

router.post("/login", async (req, res) => {

   await User.findOne({email: req.body.email})
      .then(user => {
          if(!user) res.send("User not found");
          bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
              if (err) {
                  throw err
              } else if (!isMatch) {
                  console.log("Password doesn't match!")
              } else {
                  req.session.user = user;
                  res.sendStatus(200);
              }
          })
      })
});

router.post("/signup", async (req, res) => {

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
                      req.session.user = user;
                      res.sendStatus(200);
                  })
                  .catch(err => res.status(400).json("Error: " + err));
          });
      });
});

router.route('/logout').post((req, res) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(200);
});

router.route('/me').get((req, res) => {
  res.json(req.user);
});

// router.use('/google', require('./google'));
