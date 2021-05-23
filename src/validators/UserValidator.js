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
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object()
      .keys({
        email: Joi.string().optional(),
        nome: Joi.string().optional(),
        nascimento: Joi.string().optional(),
      })
    .min(1),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().required(),
    }),
  }),
};
