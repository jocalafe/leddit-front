import React from 'react';
import { shallow } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SubredditItem from './SubredditItem';

describe('SubredditItem', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <SubredditItem />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
