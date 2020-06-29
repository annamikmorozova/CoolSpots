const mongoose = require('mongoose');
const Joi = require("joi");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 15,
    },
    firstName: {
        type: String,
        required: true,
        trim: true, //cuts off empty spaces
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true, //cuts off empty spaces
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, //cuts off empty spaces
        maxlength: 70
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 999
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    places: [{
        type: Schema.Types.ObjectId, ref: "Place"
    }],
    friends: [{
        type: Schema.Types.ObjectId, ref: "User"
    }]
}, {
    timestamps: true
});

userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
      username: login,
    });
    if (!user) {
      user = await this.findOne({ email: login }); //find by email is possible
    }
    return user;
  };

  userSchema.pre('remove', function(next) {
    this.model('Places').deleteMany({ user: this._id }, next);
  });

function validateUser(user) {
    const schema = {
      username: Joi.string()
        .required(),
      firstName: Joi.string()
        .required(),
      lastName: Joi.string()
        .required(),
      email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'edu'] } }), //must be .com or .edu
      password: Joi.string()
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    };
    return Joi.validate(user, schema);
  }

  const passportLocalMongoose = require("passport-local-mongoose"); 
  userSchema.plugin(passportLocalMongoose); 

  const User = mongoose.model("User", userSchema);
  
  module.exports = { User, validate: validateUser };