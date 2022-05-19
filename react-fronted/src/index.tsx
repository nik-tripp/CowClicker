import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CowClicker from './CowClicker';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

axios.defaults.baseURL = 'http://sample-api.com'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CowClicker />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);
