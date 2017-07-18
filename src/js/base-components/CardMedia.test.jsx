import React from 'react';
import { shallow } from 'enzyme';

import CardMedia from './Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('CardMedia', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <CardMedia />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
