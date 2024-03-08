import { Customers } from '..';

export function AllCustomersTab() {
  return (
    <div>
      <Customers.Customer
        id='1'
        name='Gabriel Camargo'
        email='gcamargo.dev@gmail.com'
        position='(0, 10)'
      />
    </div>
  );
}
