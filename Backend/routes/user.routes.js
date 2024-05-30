const validateUser = require("../Middlewares/auth.validate");
const { createUser, findUser } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", validateUser, createUser);

router.post("/login", findUser);

module.exports = router;
