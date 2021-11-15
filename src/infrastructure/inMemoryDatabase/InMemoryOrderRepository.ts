import { OrderRepository } from '../../application/contracts/OrderRepository';
import { Order } from '../../entities/Order';

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  async add(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async getByNumber(orderNumber: string): Promise<Order | null> {
    return (
      this.orders.find(
        (order: Order): boolean => order.orderNumber === orderNumber
      ) || null
    );
  }

  async getByDocument(clientDni: string): Promise<Order | null> {
    return (
      this.orders.find(
        (order: Order): boolean => order.clientDni === clientDni
      ) || null
    );
  }

  async updateStatus(orderNumber: string, status: string): Promise<void> {
    const temp: Order[] = this.orders;
    const index: number = temp.findIndex(
      (t: Order): boolean => t.orderNumber === orderNumber
    );
    temp[index].status = status;
    this.orders = temp;
  }
}
