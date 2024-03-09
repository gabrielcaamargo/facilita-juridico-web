import { ComponentProps } from 'react';
import { ConfirmButtonVariants } from './ModalRoot';

interface IModalButtonProps extends ComponentProps<'button'> {
  title: string
  variant?: ConfirmButtonVariants
}

export function ModalButton({ title, variant = 'default', ...rest }: IModalButtonProps) {
  const variants = {
    empty: 'text-gray-500',
    default: 'bg-blue-500 text-white',
    danger: 'bg-red-500 text-white'
  };

  return (
    <button
      className={`rounded px-2 py-1 ${variants[variant]} duration-75 ease-in hover:brightness-75`}
      {...rest}
    >
      {title}
    </button>
  );
}
