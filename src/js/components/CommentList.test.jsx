import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CommentList from './CommentList';

describe('CommentList', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <CommentList />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
