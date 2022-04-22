const Joi = require("joi");

const registerAndLoginSchema = Joi.object({
  username: Joi.string().alphanum().min(6).max(30).required(),
  password: Joi.string().alphanum().min(6).max(30).required(),
  repassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
});

module.exports = {
  registerAndLoginSchema,
};
