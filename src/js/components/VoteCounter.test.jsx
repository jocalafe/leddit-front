import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import VoteCounter from './VoteCounter';

describe('VoteCounter', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <VoteCounter />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
