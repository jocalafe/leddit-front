import React from 'react';
import { shallow } from 'enzyme';

import IconButton from './IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('IconButton', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <IconButton label='test button' />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
