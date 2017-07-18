import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('ListItem', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <ListItem />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
