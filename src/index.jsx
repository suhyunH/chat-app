import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  < HashRouter>
     <App />
  </ HashRouter>,
  document.getElementById('root')
);

 reportWebVitals();
