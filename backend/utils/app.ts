import { RequestHandler } from 'express';

export const ce = (m: RequestHandler) => (req, res, next): RequestHandler =>
  m(req, res, next).catch((err) => next(err));
