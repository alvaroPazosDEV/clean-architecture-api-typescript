import { NotificationService } from '../../application/contracts/NotificationService';
import { Customer } from '../../entities/Customer';
import { Order } from '../../entities/Order';

export class EmailNotificationService implements NotificationService {
  async notify(customer: Customer, order: Order): Promise<void> {
    console.log('Se notificó al cliente por correo');
  }
}
