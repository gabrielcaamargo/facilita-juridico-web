import { CustomersTabs } from '.';
import { useCurrentCustomerTabContext } from '../../../contexts/CurrentCustomerTabContext';

export function TabsRoot() {
  const { currentTab } = useCurrentCustomerTabContext();

  return (
    <div className="w-full flex-items-center gap-4">
      <div className='flex items-center gap-2 mb-8'>
        <CustomersTabs.Tab title='Todos os clientes' tabId='customers'/>
        <CustomersTabs.Tab title='Clientes mais próximos' tabId='distance' />
      </div>

      {
        currentTab === 'customers'
          ? <CustomersTabs.AllCustomers />
          : <h1>Distance</h1>
      }
    </div>
  );
}
