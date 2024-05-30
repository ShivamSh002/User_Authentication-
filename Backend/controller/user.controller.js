const User = require("../model/user.model");

const createUser = async (req, res) => {
  console.log("controller");
  console.log(req.body);
  const user = await User.create(req.body);
  res.json(user);
};

const findUser = async (req, res) => {
  console.log("controller");
  const { username, password } = req.body;
  const user = await User.findOne({
    username: username,
    password: password,
  });
  console.log(user);
  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(500).json("unauthorized");
  }
};

module.exports = { createUser, findUser };
