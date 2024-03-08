import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/Router';
import { Header } from './components/Header';
import { CurrentCustomerTabContextProvider } from './contexts/CurrentCustomerTabContext';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <CurrentCustomerTabContextProvider>
        <AppRoutes />
      </CurrentCustomerTabContextProvider>
    </BrowserRouter>
  );
}
