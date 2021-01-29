import { RequestHandler } from 'express';

export const ce = (m) => (req, res, next): RequestHandler =>
  m(req, res, next).catch((err) => next(err));
