import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('Card', () => {
  it('renders', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <Card />
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
