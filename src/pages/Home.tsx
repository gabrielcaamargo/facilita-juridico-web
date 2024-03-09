import { useEffect } from 'react';
import { Customers } from '../components/Customers';

import { CustomerService } from '../services/CustomerService';
import { useCustomerContext } from '../contexts/CustomerContext';

export function Home() {
  const customerService = new CustomerService();
  const { setCustomers } = useCustomerContext();

  useEffect(() => {
    (async function getCustomers() {
      const customers = await customerService.getAllCustomers();

      setCustomers(customers);
    })();
  }, []);

  return (
    <div className='mt-8 mx-auto max-w-[90vw] md:max-w-[768px]'>
      <Customers.Root>
        <Customers.Header />
        <Customers.Content />
      </Customers.Root>
    </div>
  );
}
