import { Customers } from '..';
import { useCustomerContext } from '../../../contexts/CustomerContext';

export function AllCustomersTab() {
  const { customers } = useCustomerContext();

  return (
    <div className='flex flex-col gap-4'>
      {customers.map((customer, index) => (
        <Customers.Customer
          key={index}
          id={customer.id}
          name={customer.name}
          email={customer.email}
          position={`(${customer.position})`}
        />
      ))}
    </div>
  );
}
