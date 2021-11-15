import { Customer } from '../../entities/Customer';

export interface CustomerRepository {
  add(customer: Customer): Promise<void>;
  getByDocument(dni: string): Promise<Customer | null>;
}
