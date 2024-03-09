import { TrashSimple } from 'phosphor-react';
import { ICustomer } from '../../@types/ICustomer';
import { useModalContext } from '../../contexts/ModalContext';
import { Modal } from '../Modal';
import { CustomerService } from '../../services/CustomerService';

interface ICustomerProps {
  customer: ICustomer
}

export function Customer({ customer }: ICustomerProps) {
  const { openDelete, toggleOpenDelete } = useModalContext();
  const customerService = new CustomerService();

  async function handleDeleteCustomer() {
    await customerService.deleteCustomer(customer.id)
      .then(() => {
        alert(`${customer.name} deletado com sucesso!`);
        toggleOpenDelete();
        location.reload();
      })
      .catch(err => alert(err));
  }

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
          <TrashSimple size={24} color='#FF0808' onClick={toggleOpenDelete} />
        </button>
      </div>

      {openDelete && (
        <Modal.Root
          title={`Deletar ${customer.name}`}
          cancelButton
          confirmButtonVariant='danger'
          confirmButtonTitle='Deletar'
          onConfirm={handleDeleteCustomer}
          onCancel={toggleOpenDelete}
        />
      )}
    </div>
  );
}
