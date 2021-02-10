import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  UPDATE: toRequestValidator(
    Joi.object({
      role: Joi.string().valid('ambassador', 'default').required(),
    }),
    'body',
  ),
};
