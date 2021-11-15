import express, { Router } from 'express';
import { AppDependencies } from '../../server';
import { OrderController } from '../../../adapters/controllers/order';

export const orderRouter = (dependencies: AppDependencies): Router => {
  const router: Router = express.Router();
  const controller = new OrderController(
    dependencies.databaseService,
    dependencies.notificationService
  );

  router.route('/:orderId').get(controller.getOrder);
  router.route('/:orderId/deliver').put(controller.deliverOrder);
  return router;
};
