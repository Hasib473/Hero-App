import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Product from './Pages/product/Product.jsx';
import Install from './Pages/Install/Install.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,
    children: [
      { index: true,
      loader:()=>fetch ('appData.json'),
       Component: Home },
      {path: 'product', Component: Product},
      {path:'install', Component: Install}

    ]
   },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
