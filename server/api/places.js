const router = require('express').Router();
const {Place} = require('../db/models/place');
const {User} = require('../db/models/user');


function loggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.sendStatus(403)
    }
  }

//get all places
router.get("/", async (req, res, next) => {
    try {
        const places = await Place.find();
        res.json(places); 
    } catch(error) {
        next(error)
    }
});

router.post("/", loggedIn, async (req, res, next) => {
    try {
        const newPlace = new Place({
            name: req.body.name,
            comment: req.body.comment,
            lat: req.body.lat,
            lng: req.body.lng,
            address: req.body.address
        })
        const user = req.user;
        user.places.push(newPlace._id)
        await newPlace.save()
        await user.save()
        User.findOne({_id: user._id}).populate("places").then(populatedUser => {
            res.json(populatedUser)
        })
    } catch(error) {
        next(error)
    }
});

// router.delete("/:placeId", async (req, res, next) => {
//     try {
//         const destroyedPlace = await Place.destroy({
//             where: {
//                 id: req.params.placeId
//             }
//         });
//         if (!destroyedPlace) {
//             res.sendStatus(404)
//             console.log("Place was not found. Did you already delete is?")
//         } else {
//             res.sendStatus(204)
//             console.log("Place is successfully deleted")
//         }
//     } catch(error) {
//         next(error)
//     }
// });

// router.put("/:placeId", async (req, res, next) => {
//     try {
//         const place = await Place.findByPk({
//             where: {
//                 id: req.params.placeId
//             }
//         });
//         if (!place) {
//             res.sendStatus(404)
//             console.log("Place was not found.")
//         } else {
//             res.sendStatus(204)
//             console.log("Place is successfully updated")
//         }
//     } catch(error) {
//         next(error)
//     }
// });

module.exports = router;

