import { createContext, useContext, useState } from 'react';
import { ICustomer } from '../@types/ICustomer';

interface ICustomerContext {
  customers: ICustomer[],
  setCustomers: (setState: ICustomer[]) => void
}

interface ICustomerContextProps {
  children: React.ReactNode
}

const CustomerContext = createContext({} as ICustomerContext);

function CustomerContextProvider({ children }: ICustomerContextProps) {
  const [customers, setCustomers] = useState([] as ICustomer[]);

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
}

const useCustomerContext = () => useContext(CustomerContext);

export { CustomerContextProvider, useCustomerContext };
