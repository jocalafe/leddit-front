import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './reducers/index.js'

import '../css/index.scss';

import App from './App';

injectTapEventPlugin();

const body = (
  <Provider store={store}>
    <App />
  </Provider>
);

const element = document.getElementById('root');
ReactDOM.render(body, element);
