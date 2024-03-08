import { Customers } from '..';
import { useCustomerContext } from '../../../contexts/CustomerContext';

export function AllCustomersTab() {
  const { customers } = useCustomerContext();

  return (
    <div className='flex flex-col gap-4'>
      {customers.map((customer) => (
        <Customers.Customer
          key={customer.id}
          customer={customer}
        />
      ))}
    </div>
  );
}
