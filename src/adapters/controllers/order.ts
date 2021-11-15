import { Request, Response } from 'express';
import { DatabaseService } from '../../application/contracts/DatabaseService';
import { NotificationService } from '../../application/contracts/NotificationService';
import { DeliverOrder } from '../../application/use_cases/DeliverOrder';
import { GetOrder } from '../../application/use_cases/GetOrder';

export class OrderController {
  constructor(
    private databaseService: DatabaseService,
    private notificationService: NotificationService
  ) {
    this.getOrder = this.getOrder.bind(this);
    this.deliverOrder = this.deliverOrder.bind(this);
  }

  async getOrder(req: Request, res: Response): Promise<void> {
    const GetOrderCommand = new GetOrder(this.databaseService.orderRepository);
    const { orderId } = req.params;
    const order = await GetOrderCommand.getOrder(orderId);
    res.json(order);
  }

  async deliverOrder(req: Request, res: Response): Promise<void> {
    const DeliverOrderCommand = new DeliverOrder(
      this.databaseService.orderRepository,
      this.databaseService.customerRepository,
      this.notificationService
    );
    const { orderId } = req.params;
    await DeliverOrderCommand.deliverOrder(orderId);
    res.send();
  }
}
