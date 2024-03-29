import { HttpClient } from '../utils/HttpClient';

export class CustomerService {
  private httpClient = new HttpClient('http://localhost:3000/api/v1');

  async getAllCustomers() {
    try {
      const customers = await this.httpClient.get('/customers');

      return customers;
    } catch (error) {
      return error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createCustomer(body: any) {
    try {
      return this.httpClient.create('/customers', body);

    } catch (error) {
      return error;
    }
  }

  async deleteCustomer(id: string) {
    try {
      return this.httpClient.delete(`/customers/${id}`);

    } catch (error) {
      return error;
    }
  }
}
