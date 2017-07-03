import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PostItem from './PostItem';

describe('PostItem', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <PostItem />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
