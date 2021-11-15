import { Order } from '../../entities/Order';
import { OrderRepository } from '../contracts/OrderRepository';

export class GetOrder {
  constructor(private orderRepository: OrderRepository) {}
  /**
   * Obtiene la información de una orden de compra
   * @param orderNumber
   * @returns
   */
  async getOrder(orderNumber: string): Promise<Order | null> {
    return await this.orderRepository.getByNumber(orderNumber);
  }
}
