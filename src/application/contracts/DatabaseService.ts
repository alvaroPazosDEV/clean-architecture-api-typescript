import { CustomerRepository } from './CustomerRepository';
import { OrderRepository } from './OrderRepository';

export abstract class DatabaseService {
  constructor(
    public customerRepository: CustomerRepository,
    public orderRepository: OrderRepository
  ) {}

  abstract connect(): Promise<void>;
}
