const mongoose = require('mongoose');
const Joi = require("joi");  //Data validation library https://hapi.dev/module/joi/ 

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    comment: {
        type: String,
        trim: true, //cuts off empty spaces
        maxlength: 50
    },
    lat: {
      type: mongoose.Types.Decimal128,
      required: true
    },
    lng: {
      type: mongoose.Types.Decimal128,
      required: true
    },
    address: {
      type: String,
      required: true
    }
}, {
    timestamps: true
});

function validateUser(place) {
    const schema = {
      name: Joi.string()
        .required(),
      comment: Joi.string()
        .required()
    };
    return Joi.validate(place, schema);
  }
  
  const Place = mongoose.model("Place", placeSchema);
  
  module.exports = { Place, validate: validateUser };