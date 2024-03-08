interface ICustomersRootProps {
  children: React.ReactNode
}

export function CustomersRoot({ children }: ICustomersRootProps) {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        {children}
      </div>
    </div>
  );
}
