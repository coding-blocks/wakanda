import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';

export default {
  GETById: toRequestValidator(
    Joi.object({
      taskId: Joi.string().required(),
    }),
    'params',
  ),
};
