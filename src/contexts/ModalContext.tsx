import { createContext, useContext, useState } from 'react';

interface IModalContext {
  openDelete: boolean
  toggleOpenDelete: () => void
  openCreate: boolean
  toggleOpenCreate: () => void
}

interface IModalContextProps {
  children: React.ReactNode
}

const ModalContext = createContext({} as IModalContext);

function ModalContextProvider({ children }: IModalContextProps) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  function toggleOpenDelete() {
    setOpenDelete(prev => !prev);
  }

  function toggleOpenCreate() {
    setOpenCreate(prev => !prev);
  }

  return (
    <ModalContext.Provider value={{ openDelete, toggleOpenDelete, openCreate, toggleOpenCreate }}>
      {children}
    </ModalContext.Provider>
  );
}

const useModalContext = () => useContext(ModalContext);

export { ModalContext, ModalContextProvider, useModalContext };
