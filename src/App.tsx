import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/Router';
import { Header } from './components/Header';
import { CurrentCustomerTabContextProvider } from './contexts/CurrentCustomerTabContext';
import { CustomerContextProvider } from './contexts/CustomerContext';
import { ModalContextProvider } from './contexts/ModalContext';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <CustomerContextProvider>
        <CurrentCustomerTabContextProvider>
          <ModalContextProvider>
            <AppRoutes />
          </ModalContextProvider>
        </CurrentCustomerTabContextProvider>
      </CustomerContextProvider>
    </BrowserRouter>
  );
}
