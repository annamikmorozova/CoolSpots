const router = require('express').Router();
const {User, Place} = require('../db/models');

router.get("/", async (req, res, next) => {
    try {
        const places = await Place.findAll();
        res.json(places); 
    } catch(error) {
        next(error)
    }
});

router.get("/placeId", async (req, res, next) => {
    try {
        const place = await Place.findByPk(req.body);
        if (!place) {
            res.sendStatus(404)
            console.log("Place is not found")
        } else {
            res.json(place); 
        }
    } catch(error) {
        next(error)
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newPlace = await Place.create(req.body);
        res.send(newPlace);
    } catch(error) {
        next(error)
    }
});

router.delete("/:placeId", async (req, res, next) => {
    try {
        const destroyedPlace = await Place.destroy({
            where: {
                id: req.params.placeId
            }
        });
        if (!destroyedPlace) {
            res.sendStatus(404)
            console.log("Place was not found. Did you already delete is?")
        } else {
            res.sendStatus(204)
            console.log("Place is successfully deleted")
        }
    } catch(error) {
        next(error)
    }
});

router.put("/:placeId", async (req, res, next) => {
    try {
        const place = await Place.findByPk({
            where: {
                id: req.params.placeId
            }
        });
        if (!place) {
            res.sendStatus(404)
            console.log("Place was not found.")
        } else {
            res.sendStatus(204)
            console.log("Place is successfully updated")
        }
    } catch(error) {
        next(error)
    }
});

