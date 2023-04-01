import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import firebaseConfig from './data/config/env'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import ParamProvider from './context/ParamContext';
import CartProvider from './context/CartContext';

import App from './pages/home/App'
import ItemPage from './pages/item/ItemPage';
import CartPage from './pages/cart/CartPage';
import Checkout from './pages/checkout/Checkout';




const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: '/',element: <App />,
  },
  {
    path: '/category/:id',element: <App />,
  },
  {
    path: '/item/:id',element: <ItemPage />,
  },
  {
    path: '/cart',element: <CartPage />,
  },
  {
    path: '*',element: <App />,
  },
  {
    path: '/checkout',element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParamProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ParamProvider>
  </React.StrictMode>,
)
