import { NextFunction, Request, Response } from 'express';

export default () => (
  target: object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>,
): any => {
  const handler = descriptor.value;
  descriptor.value = (req: Request, res: Response, next: NextFunction) => {
    handler(req, res, next).catch((err) => next(err));
  };
};
