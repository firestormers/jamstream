import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App.jsx'
import Siginup from "./Siginup.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Siginup />
  </React.StrictMode>
);
