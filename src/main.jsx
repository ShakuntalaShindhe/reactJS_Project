import React from 'react';
 import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
      <BrowserRouter>
            <App />  
      </BrowserRouter>
  </Provider>

);
