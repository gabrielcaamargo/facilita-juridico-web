import { createContext, useContext, useState } from 'react';

interface IModalContext {
  open: boolean
  setOpen: (setState: boolean) => void
  toggleOpen: () => void
}

interface IModalContextProps {
  children: React.ReactNode
}

const ModalContext = createContext({} as IModalContext);

function ModalContextProvider({ children }: IModalContextProps) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(prev => !prev);
  }

  return (
    <ModalContext.Provider value={{ open, setOpen, toggleOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

const useModalContext = () => useContext(ModalContext);

export { ModalContext, ModalContextProvider, useModalContext };
