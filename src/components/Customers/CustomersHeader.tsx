import { ChangeEvent, RefObject, useRef } from 'react';
import { useModalContext } from '../../contexts/ModalContext';
import { phoneMask, phoneUnmask } from '../../utils/phoneMask';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { CustomerService } from '../../services/CustomerService';

export function CustomersHeader() {
  const customerService = new CustomerService();

  const { openCreate, toggleOpenCreate } = useModalContext();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const positionXRef = useRef<HTMLInputElement | null>(null);
  const positionYRef = useRef<HTMLInputElement | null>(null);

  function handleUpdateRefValue(event: ChangeEvent<HTMLInputElement>, ref: RefObject<HTMLInputElement>) {
    if (ref.current) {
      ref.current.value = event.target.value;
    }
  }

  async function handleSubmit() {
    const refsValues = [nameRef.current?.value, emailRef.current?.value, phoneRef.current?.value, positionXRef.current?.value, positionYRef.current?.value];

    if(refsValues.some(item => !item)) {
      alert('Preencha todos os campos!');
      return;
    }

    if(!emailRef.current?.value.includes('@')) {
      alert('Email inválido');
      return;
    }

    const body = {
      name: nameRef.current?.value,
      email: emailRef.current.value,
      phone_number: phoneUnmask(phoneRef.current?.value as string),
      position_x: positionXRef.current?.value,
      position_y: positionYRef.current?.value
    };

    try {
      await customerService.createCustomer(body);

      alert('Cliente criado com sucesso!');
      toggleOpenCreate();
      location.reload();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-xl">Clientes</h2>
      <button
        onClick={toggleOpenCreate}
        className="text-white rounded bg-blue-500 duration-75 ease-in hover:bg-blue-600 active:opacity-75 p-2"
      >
          Novo cliente
      </button>

      {openCreate && (
        <Modal.Root
          title='Novo cliente'
          cancelButton
          confirmButtonTitle='Criar'
          onConfirm={handleSubmit}
          onCancel={toggleOpenCreate}
        >
          <form className='flex flex-col gap-4'>
            <Input
              label='Nome'
              name='name'
              placeholder='Nome do cliente'
              ref={nameRef}
              onChange={(event) => handleUpdateRefValue(event, nameRef)}
            />

            <Input
              label='Email'
              name='email'
              type='email'
              placeholder='Email do cliente'
              ref={emailRef}
              onChange={(event) => handleUpdateRefValue(event, emailRef)}
            />

            <Input
              label='Telefone'
              name='phone'
              placeholder='Telefone para contato'
              ref={phoneRef}
              maxLength={11}
              onChange={(event) => {
                event.target.value = phoneMask(event.target.value);
                handleUpdateRefValue(event, phoneRef);
              }}
            />

            <div className='flex w-full gap-4 justify-between'>
              <Input
                label='Pos. Eixo X'
                name='pos_x'
                type='number'
                max={100}
                min={0}
                placeholder='Posição no eixo X'
                ref={positionXRef}
                onChange={(event) => handleUpdateRefValue(event, positionXRef)}
              />
              <Input
                label='Pos. Eixo Y'
                name='pos_y'
                type='number'
                max={100}
                min={0}
                placeholder='Posição no eixo Y'
                ref={positionYRef}
                onChange={(event) => handleUpdateRefValue(event, positionYRef)}
              />
            </div>
          </form>
        </Modal.Root>
      )}
    </div>
  );
}
