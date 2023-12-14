import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- siin võtan kasutusele
import './index.css'; // <--- siin kirjutasin üle
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';
import { CartSumProvider } from './store/CartSumContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartSumProvider>
        <App />
      </CartSumProvider>
    </BrowserRouter>
  </React.StrictMode>
);


