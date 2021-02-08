import { toRequestValidator } from '../../../utils/validator';
import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export default {
  POST: toRequestValidator(
    Joi.object({
      scope: Joi.object().required(),
      data: Joi.object().required(),
    }),
    'body',
  ),
  SUBMIT: (req: Request, res: Response, next: NextFunction) => {
    if (req.user.role === 'admin') {
      const handler = toRequestValidator(
        Joi.object({
          status: Joi.string().valid('review', 'draft', 'accepted', 'rejected').required(),
        }),
        'body',
      );
      return handler(req, res, next);
    }
    return toRequestValidator(
      Joi.object({
        status: Joi.string().valid('review', 'draft').required(),
      }),
      'body',
    )(req, res, next);
  },
};
