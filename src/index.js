import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rotas from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
  document.getElementById('root')
);