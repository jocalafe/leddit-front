import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'isomorphic-fetch';

import Main from './routes/Main';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <h1> Leddit! </h1>
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
