const Joi = require('joi');

const userCreateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    dob: Joi.date().required()
});

module.exports = userCreateSchema;
