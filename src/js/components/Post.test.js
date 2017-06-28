import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Post from './Post';

describe('Post', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Post />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
