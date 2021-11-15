import { CustomerRepository } from '../contracts/CustomerRepository';
import { NotificationService } from '../contracts/NotificationService';
import { OrderRepository } from '../contracts/OrderRepository';

export class DeliverOrder {
  constructor(
    private orderRepository: OrderRepository,
    private customerRepository: CustomerRepository,
    private notificationService: NotificationService
  ) {}

  /**
   * Entrega una orden de compra en el sistema
   * @param orderNumber
   */
  async deliverOrder(orderNumber: string): Promise<void> {
    const order = await this.orderRepository.getByNumber(orderNumber);
    if (!order) throw new Error('Order doesn´t exist');
    if (order.status !== 'RECEIVED')
      throw new Error('Order was already delivered');
    const customer = await this.customerRepository.getByDocument(
      order.clientDni
    );
    if (customer) {
      await this.orderRepository.updateStatus(orderNumber, 'DELIVERED');
      await this.notificationService.notify(customer, order);
    }
  }
}
