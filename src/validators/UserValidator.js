const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        nome: Joi.string().required(),
        nascimento: Joi.string().required(),
        cpf: Joi.string().required(),
        endereco: Joi.string().required(),
        cidade: Joi.string().required(),
        estado: Joi.string().required(),
        cep: Joi.string().required(),
    })
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
        
    })
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object()
      .keys({
        nome: Joi.string().optional(),
        nascimento: Joi.string().optional(),
        endereco: Joi.string().optional(),
        cidade: Joi.string().optional(),
        estado: Joi.string().optional(),
        cep: Joi.string().optional(),
      })
    .min(1),
  }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().required(),
    }),
  }),
};
