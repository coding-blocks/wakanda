import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      collegeName: Joi.string()
        .required()
        .messages({ 'any.empty': 'College Name cannot be empty.' }),
      collegeAddress: Joi.string()
        .required()
        .messages({ 'any.empty': 'College Address cannot be empty.' }),
      topic: Joi.string().required().messages({ 'any.empty': 'Topic cannot be empty.' }),
      startDate: Joi.date()
        .min(Date.now())
        .message('Date cannot be earlier than today.')
        .required(),
      endDate: Joi.alternatives().try(
        Joi.date().greater(Joi.ref('startDate')),
        Joi.required().valid(null),
      ),
      monetary: Joi.string()
        .required()
        .messages({
          'any.empty': 'Please clarify whether college will be giving paying for this workshop.',
        }),
      accomodation: Joi.string()
        .required()
        .messages({
          'any.empty':
            'Please clarify whether college will be giving giving accomodation for this workshop.',
        }),
      request: Joi.string()
        .required()
        .messages({ 'any.empty': 'Please clarify whether you have any special requests or not.' }),
      mobile: Joi.string()
        .required()
        .messages({ 'any.empty': 'Please add contact information of the cooridator/organizer.' }),
    }),
    'body',
  ),
};
