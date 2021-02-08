import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      userId: Joi.number().required(),
      taskId: Joi.number().required(),
    }),
    'body',
  ),
  GET: toRequestValidator(
    Joi.object({
      taskId: Joi.string().required(),
      status: Joi.string(),
    }),
    'query',
  ),
  DELETE: toRequestValidator(
    Joi.object({
      userId: Joi.number().required(),
      taskId: Joi.number().required(),
    }),
    'body',
  ),
};
