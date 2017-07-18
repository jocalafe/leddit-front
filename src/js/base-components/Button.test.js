import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('Button', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Button label='test button' />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
