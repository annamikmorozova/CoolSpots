const mongoose = require('mongoose');
const Joi = require("joi");  //Data validation library https://hapi.dev/module/joi/ 
mongoose.connect('mongodb://localhost:3000/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    comment: {
        type: Text,
        required: true,
        trim: true, //cuts off empty spaces
        maxlength: 50
    },
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