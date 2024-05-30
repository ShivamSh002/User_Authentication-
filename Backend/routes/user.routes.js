const validateUser = require("../Middlewares/auth.validate");
const { createUser } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", validateUser, createUser);

module.exports = router;
