import React from 'react';
import "./Assets/FelichiyaFont.ttf"
import ReactDOM from 'react-dom/client';
import "./Assets/index.css"
import App from './Page/App';
import {BrowserRouter} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

