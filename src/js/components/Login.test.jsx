import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { reducer } from 'redux-form';
import { Provider } from 'react-redux';

import Login from './Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer);

jest.mock('react-dom');

describe('TextField', () => {
  it('renders', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <Provider store={store}>
          <Login />
        </Provider>
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
