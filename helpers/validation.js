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
    'tweet': Joi.object().keys({
        message: Joi.string(),
        publishedOn: Joi.string(),
        authorId: Joi.string()
    }),
    'tweetUpd': Joi.object().keys({
        message: Joi.string().optional(),
        publishedOn: Joi.string().optional(),
        authorId: Joi.string().optional()
    }),
    'likes': Joi.object().keys({
        tweetId: Joi.number().positive(),
        authorId: Joi.number().positive(),
    })
}

exports.check = function (schema, body) {
    if(!schemas[schema])
        return {};
    return Joi.validate(body, schemas[schema], {presence: 'required'});
}
