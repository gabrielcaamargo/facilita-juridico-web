import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/Router';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
