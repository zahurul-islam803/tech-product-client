import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import {  HelmetProvider } from "react-helmet-async";
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster />
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
