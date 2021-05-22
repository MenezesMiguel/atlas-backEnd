const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
        user_id: Joi.string().required(),
        endereco: Joi.string().required(),
        cidade: Joi.string().required(),
        estado: Joi.string().required(),
        cep: Joi.string().required(),
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
