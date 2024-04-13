import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutSec from './AboutSec.jsx'
import Contact from './Contact.jsx'
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let route = createBrowserRouter([{ path: '/', element: <App/> }, { path: '/AboutSec', element:<AboutSec/> }, { path: '/Contact', element:<Contact/> }])
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>

);

reportWebVitals();
