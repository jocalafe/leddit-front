import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'isomorphic-fetch';

import Main from './routes/Main';

import AppBar from './base-components/AppBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <AppBar title='Leddit!' />
          <Main isAuthenticating={this.props.isAuthenticating}
            user={this.props.user} />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  isAuthenticating: PropTypes.bool,
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    isAuthenticating: state.auth.isAuthenticating,
    user: state.auth.user
  };
}

export default withRouter(connect(mapStateToProps)(App));
