import React from 'react';
import { shallow } from 'enzyme';

import List from './List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('List', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <List />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
