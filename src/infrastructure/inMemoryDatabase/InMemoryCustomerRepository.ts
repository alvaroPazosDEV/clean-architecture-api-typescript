import { CustomerRepository } from '../../application/contracts/CustomerRepository';
import { Customer } from '../../entities/Customer';

export class InMemoryCustomerRepository implements CustomerRepository {
  private customers: Customer[] = [];

  async add(customer: Customer): Promise<void> {
    this.customers.push(customer);
  }

  async getByDocument(dni: String): Promise<Customer | null> {
    return (
      this.customers.find(
        (customer: Customer): boolean => customer.dni === dni
      ) || null
    );
  }
}
