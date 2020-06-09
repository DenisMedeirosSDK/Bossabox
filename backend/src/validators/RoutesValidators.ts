import { celebrate, Joi, errors, Segments } from 'celebrate';


const validators = {
  createTool: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      link: Joi.string().required(),
      tags: Joi.string().lowercase().required()
    })
  }),
  searchTags: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      tags: Joi.string().required().lowercase(),
    })
  }),
  deleteTool: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required()
    })
  })
}

export default validators;
