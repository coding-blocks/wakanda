import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      collegeName: Joi.string().required().label('College Name'),
      collegeAddress: Joi.string().required(),
      topic: Joi.string().required(),
      startDate: Joi.date()
        .min(Date.now())
        .message('Date cannot be earlier than today.')
        .required(),
      endDate: Joi.alternatives().try(
        Joi.date().greater(Joi.ref('startDate')),
        Joi.required().valid(null),
      ),
      monetary: Joi.string().required(),
      accomodation: Joi.string().required(),
      request: Joi.string().required(),
      mobile: Joi.string().required(),
    }),
    'body',
  ),
};
