import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from "./Components/Context";
import "./index.css";
import Header from "./Components/Header";

ReactDOM.render(
  <Provider>
    <Header />
    <App />
  </Provider>,
  document.getElementById('root')
);