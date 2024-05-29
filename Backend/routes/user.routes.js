const validateSearchQuery = require("../Middlewares/auth.validate");
const { createUser } = require("../controller/user.controller");

const Router = require("express").Router();

Router.post("/register", validateSearchQuery, createUser);

module.exports = Router;
