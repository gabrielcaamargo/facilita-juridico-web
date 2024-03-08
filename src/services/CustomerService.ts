import { HttpClient } from '../utils/HttpClient';

export class CustomerService {
  httpClient = new HttpClient('http://localhost:3000');

  async getAllCustomers() {
    try {
      const customers = await this.httpClient.get('/customers');

      return customers;
    } catch (error) {
      return error;
    }
  }
}
