import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "isomorphic-fetch";

import Login from './containers/Login'
export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <h1> Leddit! </h1>
          <Login />
        </div>
      </MuiThemeProvider>
    );
  }
}
