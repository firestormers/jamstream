import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter,  Route , Routes } from 'react-router-dom';
import Siginup from "./Siginup.jsx";
import App from "./App.jsx"
import Home from './components/Home.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    <App/>
  
  </React.StrictMode>
);
