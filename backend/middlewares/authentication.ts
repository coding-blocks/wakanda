import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../base/errors/api-error';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    return next();
  }

  throw new ApiError(
    {
      title: 'Unauthenticated',
      detail: 'You need to login inorder to view this page.',
    },
    401,
  );
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req?.user.role === 'admin') {
    return next();
  }

  throw new ApiError(
    {
      title: 'Unauthorized',
      detail: 'You are not authorized to view this page.',
    },
    403,
  );
};
