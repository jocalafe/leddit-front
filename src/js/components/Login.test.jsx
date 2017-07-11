import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { reducer } from 'redux-form';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const store = createStore(reducer);

jest.mock('react-dom');

describe('Login', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Provider store={store}>
          <Login />
        </Provider>
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders two TextFields', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <Login />
        </Provider>
      </MuiThemeProvider>
    );
    expect(wrapper.find('TextField').length).toBe(2);
  });
  it('renders two buttons', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <Login />
        </Provider>
      </MuiThemeProvider>
    );
    expect(wrapper.find('button').length).toBe(2);
  });
});
