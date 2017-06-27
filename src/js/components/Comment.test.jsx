import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Comment from './Comment';

describe('Comment', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Comment />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
