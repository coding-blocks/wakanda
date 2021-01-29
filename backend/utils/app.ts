import { RequestHandler } from 'express';

// @ts-ignore
export const ce = (m: Promise) => (req, res, next): RequestHandler =>
  m(req, res, next).catch((err) => next(err));
