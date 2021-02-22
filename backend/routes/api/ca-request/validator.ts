import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      name: Joi.string().required().messages({
        'string.empty': `Name cannot be an empty`,
      }),
      collegeAddress: Joi.string()
        .required()
        .messages({ 'string.empty': 'College Address cannot be empty.' }),
      topic: Joi.string().required().messages({ 'string.empty': 'Topic cannot be empty.' }),
      startDate: Joi.date()
        .min(Date.now())
        .message('Date cannot be earlier than today.')
        .required(),
      endDate: Joi.alternatives().try(
        Joi.date().greater(Joi.ref('startDate')),
        Joi.required().valid(null),
      ),
      monetary: Joi.string().required().messages({
        'string.empty': 'Please clarify whether college will be giving paying for this workshop.',
      }),
      accomodation: Joi.string().required().messages({
        'string.empty':
          'Please clarify whether college will be giving giving accomodation for this workshop.',
      }),
      request: Joi.string().required().messages({
        'string.empty': 'Please clarify whether you have any special requests or not.',
      }),
      mobile: Joi.string()
        .required()
        .messages({ 'string.empty': 'Please specify contact number.' }),
    }),
    'body',
  ),
  UPDATE: toRequestValidator(
    Joi.object({
      data: Joi.object({
        caCode: Joi.string()
          .required()
          .messages({ 'string.empty': 'Please specify valid CA Code.' }),
      }),
    }),
    'body',
  ),
};
