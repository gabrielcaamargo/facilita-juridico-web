import { TrashSimple } from 'phosphor-react';

interface ICustomerProps {
  id: string
  name: string,
  email: string
  position: string
}

export function Customer({ name, email, position }: ICustomerProps) {
  return (
    <div className="bg-gray-200 p-2 rounded flex items-center justify-between">
      <div>
        <div>
          <strong>{name}</strong>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">{email}</span>
          <span className="text-sm text-gray-500">Posição: {position}</span>
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
