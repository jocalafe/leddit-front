import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter } from 'react-router-dom';

import store from './reducers/index.js';

import '../scss/index.scss';

import App from './App';

injectTapEventPlugin();

const body = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

const element = document.getElementById('root');
ReactDOM.render(body, element);
