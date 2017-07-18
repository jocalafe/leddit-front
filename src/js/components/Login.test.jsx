import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { reducer } from 'redux-form';
import { Provider } from 'react-redux';

import Login from './Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer);

describe('Login', () => {
  it('renders with 2 textfields and 2 buttons', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Provider store={store}>
          <Login />
        </Provider>
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
