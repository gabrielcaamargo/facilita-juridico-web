import { createContext, useContext, useState } from 'react';

interface IModalContext {
  open: boolean
  setOpen: (setState: boolean) => void
}

interface IModalContextProps {
  children: React.ReactNode
}

const ModalContext = createContext({} as IModalContext);

function ModalContextProvider({ children }: IModalContextProps) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

const useModalContext = () => useContext(ModalContext);

export { ModalContext, ModalContextProvider, useModalContext };
