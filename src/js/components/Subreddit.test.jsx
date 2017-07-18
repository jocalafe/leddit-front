import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Subreddit from './Subreddit';

describe('Subreddit', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Subreddit />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
