import { TrashSimple } from 'phosphor-react';
import { ICustomer } from '../../@types/ICustomer';

interface ICustomerProps {
  customer: ICustomer
}

export function Customer({ customer }: ICustomerProps) {
  return (
    <div className="bg-gray-200 p-2 rounded flex items-center justify-between">
      <div>
        <div>
          <strong>{customer.name}</strong>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">{customer.email}</span>
          <span className="text-sm text-gray-500">Posição: ({customer.position_x}, {customer.position_y})</span>
        </div>
      </div>
      <div>
        <button title='Deletar Gabriel Camargo' className='ease-in duration-75 hover:opacity-50'>
          <TrashSimple size={24} color='#FF0808'/>
        </button>
      </div>
    </div>
  );
}
