import { Customers } from '..';
import { useCustomerContext } from '../../../contexts/CustomerContext';

export function NearCustomersTab() {
  const { customers } = useCustomerContext();

  const sortedCustomers = [...customers];

  function calculateDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  sortedCustomers.sort((customerA, customerB) => {
    const distanceA = calculateDistance(0, 0, customerA.position_x, customerA.position_y);
    const distanceB = calculateDistance(0, 0, customerB.position_x, customerB.position_y);

    return distanceA - distanceB;
  });

  return (
    <div className='flex flex-col gap-4'>
      {sortedCustomers.map((customer) => (
        <Customers.Customer
          key={customer.id}
          customer={customer}
        />
      ))}
    </div>
  );
}
