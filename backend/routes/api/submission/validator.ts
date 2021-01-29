import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  POST: toRequestValidator(
    Joi.object({
      scope: Joi.object().required(),
      data: Joi.object().required(),
    }),
    'body',
  ),
  SUBMIT: toRequestValidator(
    Joi.object({
      status: Joi.string().valid('review', 'draft').required(),
    }),
    'body',
  ),
};
