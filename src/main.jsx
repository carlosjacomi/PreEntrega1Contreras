import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ItemPage from './pages/item/ItemPage';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNWJNSSItMm-_JRklUWf5RkyJtYNze2G4",
  authDomain: "ecommerce-coderhouse-8bb86.firebaseapp.com",
  projectId: "ecommerce-coderhouse-8bb86",
  storageBucket: "ecommerce-coderhouse-8bb86.appspot.com",
  messagingSenderId: "127860710922",
  appId: "1:127860710922:web:717144caab3ce7a8d189f3"
};

const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",element: <App />,
  },
  {
    path: "/category/:id",element: <App />,
  },
  {
    path: "/item/:id",element: <ItemPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
