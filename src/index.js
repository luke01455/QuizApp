import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Hashrouter } from 'react-router-dom';
import { Provider } from "react-redux";

import  store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
    <Hashrouter>
        <App />
    </Hashrouter>
  </Provider>,
   document.getElementById('root')
);