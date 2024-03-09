import { ComponentProps, forwardRef } from 'react';

interface IInputProps extends ComponentProps<'input'> {
  label: string
  name: string
  placeholder: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({ label, name, placeholder, ...rest }, ref) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-gray-700" htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type="text"
        id={name}
        placeholder={placeholder}
        className="px-4 py-2 bg-gray-200 rounded outline-none border border-transparent ease-in duration-100 focus:border-blue-500"
        {...rest}
      />
    </div>
  );
});
