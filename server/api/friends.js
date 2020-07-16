const router = require("express").Router();
const {
  User
} = require("../db/models/user");
const {returnPopulatedUser} = require("../auth");

function loggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(403);
  }
}

router.get("/", loggedIn, async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.put("/:username", loggedIn, async (req, res, next) => {
  try {
    const newFriend = await User.findOne({
      username: req.params.username
    });
    if (!req.user.friends.includes(newFriend._id)){
      req.user.friends.push(newFriend._id);
    }
    await req.user.save();
    returnPopulatedUser(req.user, res);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", loggedIn, (req, res, next) => {
    const { id } = req.params;

    const updatedFriends = User.filter(friend => friend.id !== Number(id));

    res.send(updatedFriends);
  });

module.exports = router;