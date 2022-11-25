import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CustomContextProvider } from "./services/CustomContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <BrowserRouter> 
    <CustomContextProvider>
    <App />
    </CustomContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

