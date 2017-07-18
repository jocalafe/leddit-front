import React from 'react';
import { shallow } from 'enzyme';

import AppBar from './AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('AppBar', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <AppBar title='test appbar' />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
