import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import styles 
import './css/tailwind.css';
import './scss/main.scss';

import { store } from './store/store.js';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


