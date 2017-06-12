import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from './reducers/index.js'

import App from './App';

jest.mock('react-dom');

describe('App', () => {
  it('renders', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
