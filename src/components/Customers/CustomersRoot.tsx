interface ICustomersRootProps {
  children: React.ReactNode
}

export function CustomersRoot({ children }: ICustomersRootProps) {
  return (
    <div>
      {children}
    </div>
  );
}
