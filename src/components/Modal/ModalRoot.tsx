import { createPortal }  from 'react-dom';
import { Modal } from '.';

export type ConfirmButtonVariants = 'default' | 'empty' | 'danger'

interface IModalRootProps {
  title: string
  children?: React.ReactNode,
  cancelButton?: boolean
  confirmButtonVariant?: ConfirmButtonVariants
  confirmButtonTitle?: string
  onConfirm: () => void
}

export function ModalRoot({ title, children, cancelButton, confirmButtonVariant = 'default', confirmButtonTitle = 'Confirmar', onConfirm }: IModalRootProps) {
  const portalRoot = document.getElementById('modal-root') as HTMLElement;

  return createPortal(
    <div className='absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen flex items-center justify-center'>
      <div className='relative bg-white max-w-[560px] w-full flex flex-col justify-between p-4 rounded'>
        <section>
          <Modal.Title title={title} />
        </section>

        {children}

        <footer className='flex justify-end items-center gap-4 mt-2'>
          {cancelButton && <Modal.Button variant='empty' title='Cancelar' />}
          <Modal.Button
            title={confirmButtonTitle}
            variant={confirmButtonVariant}
            onClick={onConfirm}
          />
        </footer>
      </div>
    </div>,
    portalRoot
  );
}
