import React from 'react';
import renderer from 'react-test-renderer';

import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('react-dom');

describe('TextField', () => {
  it('renders', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <TextField id='test1' />
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
