import { NextFunction, Request, Response } from 'express';

export type ErrorParams = {
  message?: string;
  status?: number;
};

export const errorHandler = (
  err: ErrorParams,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    error: err.message,
  });
};
