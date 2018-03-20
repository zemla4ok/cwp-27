const Joi = require('joi');

const schemas = {
    'user': Joi.object().keys({
        name: Joi.string(),
        email: Joi.string().email()
    }),
    'userUpd': Joi.object().keys({
        name: Joi.string().optional(),
        email: Joi.string().email().optional()
    }),
}

exports.check = function (schema, body) {
    if(!schemas[schema])
        return {};
    return Joi.validate(body, schemas[schema], {presence: 'required'});
}
