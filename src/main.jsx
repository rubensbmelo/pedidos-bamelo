import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // <- aqui você aponta para o App.jsx novo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
