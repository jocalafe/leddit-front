import React from 'react';
import { shallow } from 'enzyme';

import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('TextField', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <TextField id='test1' />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
