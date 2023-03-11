import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ItemPage from './pages/item/ItemPage';

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
