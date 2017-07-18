import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('Card', () => {
  it('renders', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Card />
      </MuiThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
