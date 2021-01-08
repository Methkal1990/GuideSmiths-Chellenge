const Joi = require('@hapi/joi');

module.exports = (phone) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().required(),
    description: Joi.string().required(),
    manufacturer: Joi.string().required(),
    platform: Joi.string().required(),
    price: Joi.number().required(),
    lunch: Joi.string().required(),
    imageUrl: Joi.string(),
  });

  return schema.validate(phone);
};
