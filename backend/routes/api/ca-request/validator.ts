import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      name: Joi.string().required(),
      number: Joi.string().required(),
      email: Joi.string().required(),
      college: Joi.string().required(),
      city: Joi.string().required(),
      branch: Joi.string().required(),
      graduationYear: Joi.string().required(),
      fbLink: Joi.string().required(),
      profiles: Joi.string().required(),
      criteria: Joi.string().required(),
      uniqueIdea: Joi.string().required(),
      additionalInfo: Joi.string().required(),
    }),
    'body',
  ),
  UPDATE: toRequestValidator(
    Joi.object({
      data: Joi.object({
        caCode: Joi.string()
          .required()
          .messages({ 'string.empty': 'Please specify valid CA Code.' }),
        manager: Joi.string()
          .required()
          .messages({ 'string.empty': 'Please specify valid manager.' }),
      }),
    }),
    'body',
  ),
};
