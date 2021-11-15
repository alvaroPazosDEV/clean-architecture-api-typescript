import { DatabaseService } from '../../application/contracts/DatabaseService';
import { Customer } from '../../entities/Customer';
import { Order } from '../../entities/Order';
import { InMemoryCustomerRepository } from './InMemoryCustomerRepository';
import { InMemoryOrderRepository } from './InMemoryOrderRepository';

export class InMemoryDatabaseService extends DatabaseService {
  constructor() {
    super(new InMemoryCustomerRepository(), new InMemoryOrderRepository());
  }

  async connect(): Promise<void> {
    this.seedData();
  }

  async seedData(): Promise<void> {
    const sampleCustomer: Customer = new Customer(
      '75913803',
      'Alvaro Pazos',
      '921911654',
      'apazos@ripley.com.pe'
    );
    const sampleOrder: Order = new Order('28342911', '75913803', 'RECEIVED');

    await this.customerRepository.add(sampleCustomer);
    await this.orderRepository.add(sampleOrder);
  }
}
