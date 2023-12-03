import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Main from './js/Main';
import reportWebVitals from './reportWebVitals';
import Header from './js/Header';
import "./images/AZ.png";
import AZ from './js/AZ';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <AZ />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
