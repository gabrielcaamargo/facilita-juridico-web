import { createContext, useContext, useState } from 'react';

export type CurrentTab = 'customers' | 'distance'

interface ICurrentCustomerTabContext {
  currentTab: CurrentTab
  setCurrentTab: (setState: CurrentTab) => void
}

interface ICurrentCustomerTabContextProviderProps {
  children: React.ReactNode
}

const CurrentCustomerTabContext = createContext({} as ICurrentCustomerTabContext);

function CurrentCustomerTabContextProvider({ children }: ICurrentCustomerTabContextProviderProps) {
  const [currentTab, setCurrentTab] = useState<CurrentTab>('customers');

  return (
    <CurrentCustomerTabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </CurrentCustomerTabContext.Provider>
  );
}

const useCurrentCustomerTabContext = () => useContext(CurrentCustomerTabContext);

export { CurrentCustomerTabContextProvider, CurrentCustomerTabContext, useCurrentCustomerTabContext };
