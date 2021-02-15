import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      collegeName: Joi.string().required().label('College Name'),
      collegeAddress: Joi.string().required().label('College Address'),
      topic: Joi.string().required().label('Topic'),
      startDate: Joi.date()
        .min(Date.now())
        .message('Date cannot be earlier than today.')
        .required(),
      endDate: Joi.alternatives().try(
        Joi.date().greater(Joi.ref('startDate')),
        Joi.required().valid(null),
      ),
      monetary: Joi.string().required().label('Will College Pay?'),
      accomodation: Joi.string().required().label('Will College Porvide Accomodation?'),
      request: Joi.string().required().label('Any Special Requests?'),
      mobile: Joi.string().required().label('Contact'),
    }),
    'body',
  ),
};
