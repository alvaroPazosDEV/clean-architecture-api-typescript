import express, { Request, Response, Router } from 'express';
import { AppDependencies } from '../../server';
import { orderRouter } from './order';

export const apiRouter = (dependencies: AppDependencies): Router => {
  const router: Router = express.Router();
  const order = orderRouter(dependencies);

  router.use('/order', order);
  router.get(
    '/health',
    (req: Request, res: Response): Response => res.send('OK')
  );

  return router;
};
