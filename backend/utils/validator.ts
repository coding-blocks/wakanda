import { Handler, NextFunction, Request, Response } from 'express';
import { ApiError } from '../base/errors/api-error';

type requestValidatorKeys = 'body' | 'query' | 'params';

export const toRequestValidator = (schema, key: requestValidatorKeys = 'body'): Handler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[key], { allowUnknown: true });
    req[key] = value;

    if (error) {
      throw new ApiError(
        {
          title: 'Validation Error',
          detail: error.details[0].message,
        },
        400,
      );
    }

    next();
  };
};
