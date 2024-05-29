const Joi = require("joi");

const schema = Joi.object().keys({
  username: Joi.string().email().lowercase().required(),
  password: Joi.string().min(3).max(6),
});

const validateSearchQuery = async (req, res, next) => {
  const result = req.body;

  try {
    const response = await schema.validateAsync(result);
    console.log(response);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
};

module.exports = validateSearchQuery;
