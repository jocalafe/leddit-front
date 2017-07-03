import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PostList from './PostList';

describe('PostList', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <PostList />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
