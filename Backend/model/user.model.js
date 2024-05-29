const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = new mongoose.model("users", userSchema);

module.exports = User;
