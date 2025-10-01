import { createRoot } from 'react-dom/client';
import '../src/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
