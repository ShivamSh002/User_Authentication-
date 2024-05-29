const User = require("../model/user.model");

const createUser = async (req, res) => {
  console.log("controller");
  console.log(req.body);
  const user = await User.create(req.body);
  res.json(user);
};

module.exports = { createUser };
