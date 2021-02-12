import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      collegeName: Joi.string().min(3).max(30).required(),
      collegeAddress: Joi.string().min(10).required(),
      topic: Joi.string().min(10).required(),
      startDate: Joi.date()
        .min(Date.now())
        .message('"date" cannot be earlier than today')
        .required(),
      endDate: Joi.alternatives().try(
        Joi.date().greater(Joi.ref('startDate')),
        Joi.required().valid(null),
      ),
      monetary: Joi.string().required(),
      accomodation: Joi.string().required(),
      request: Joi.string().required(),
    }),
    'body',
  ),
};
