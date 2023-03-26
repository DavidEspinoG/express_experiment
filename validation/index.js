const Joi = require('joi');

const postUserValidation = Joi.object({
  name: Joi.string().min(3).max(25).required(),
  email: Joi.string().email().required()
})

const idValidation = Joi.object({
  id: Joi.number()
})

module.exports = { postUserValidation, idValidation };