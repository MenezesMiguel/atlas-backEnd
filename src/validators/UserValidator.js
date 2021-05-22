const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
        firebase_id: Joi.string().required(),
        email: Joi.string().required(),
        nome: Joi.string().required(),
        nascimento: Joi.string().required(),
        cpf: Joi.string().required(),
    })
  }),
  getById: celebrate({
    [Segments.BODY]: Joi.object().keys({
        
    })
  }),
  update: celebrate({
    [Segments.BODY]: Joi.object().keys({
        
    })
  }),
  delete: celebrate({
    [Segments.BODY]: Joi.object().keys({
        
    })
  }),
};
