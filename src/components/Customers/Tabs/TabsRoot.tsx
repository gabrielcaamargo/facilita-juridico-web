import { CustomersTabs } from '.';

export function TabsRoot() {
  return (
    <div className="w-full flex-items-center gap-4">
      <div className='flex items-center gap-2 mb-8'>
        <CustomersTabs.Tab title='Todos os clientes' tabId='customers'/>
        <CustomersTabs.Tab title='Clientes mais próximos' tabId='distance' />
      </div>

      <CustomersTabs.AllCustomers />
    </div>
  );
}
