import { Customer } from '../../entities/Customer';
import { Order } from '../../entities/Order';

export interface NotificationService {
  notify(customer: Customer, order: Order): Promise<void>;
}
