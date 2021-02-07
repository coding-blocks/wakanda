import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      description: Joi.object().required(),
      name: Joi.object().required(),
      points: Joi.object().required(),
      startDate: Joi.date()
        .min(Date.now())
        .message('"date" cannot be earlier than today')
        .required(),
      endDate: Joi.date().greater(Joi.ref('startDate')).required(),
    }),
    'body',
  ),
  GETById: toRequestValidator(
    Joi.object({
      id: Joi.number().required(),
    }),
    'params',
  ),
};
