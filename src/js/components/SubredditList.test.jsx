import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SubredditList from './SubredditList';

describe('SubredditList', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <SubredditList />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
