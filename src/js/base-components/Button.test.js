import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('Button', () => {
  it('renders', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <Button label='test button' />
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
