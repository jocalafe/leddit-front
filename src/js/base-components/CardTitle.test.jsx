import React from 'react';
import { shallow } from 'enzyme';

import CardTitle from './Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('CardTitle', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <CardTitle />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
