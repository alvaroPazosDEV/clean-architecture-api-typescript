import { Order } from '../../entities/Order';

export interface OrderRepository {
  add(order: Order): Promise<void>;
  getByNumber(orderNumber: string): Promise<Order | null>;
  getByDocument(dni: string): Promise<Order | null>;
  updateStatus(orderNumber: string, status: string): Promise<void>;
}
