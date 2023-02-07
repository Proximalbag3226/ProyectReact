import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css'
import Inicio from './Compmodif/inicio';
import BeardBikes from './Paginas/beardbikes';
import Ciclistasf from './Paginas/Ciclistasf';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Infot from "./Paginas/infot";
import Infob from "./Paginas/Infob";

const router = createBrowserRouter([
  {
    path: '/',
    element: <BeardBikes/>
  },
  {
    path: '/form',
    element: <Ciclistasf/>
  },
  {
    path: '/info',
    element: <Inicio/>
  },
  {
    path: '/infot',
    element: <Infot/>
  },
  {
    path: '/infob',
    element: <Infob/>
  },
  {
    path: '/',
    element: <Inicio/>
  },
  {
    path: '/',
    element: <Inicio/>
  },
  {
    path: '/',
    element: <Inicio/>
  },
  {
    path: '/',
    element: <Inicio/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);