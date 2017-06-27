import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "isomorphic-fetch";

import Login from './containers/Login';
import CommentList from './containers/CommentList';
import commentsHandler from './entities/commentsHandler';
import comment from './entities/comment';
import { fetchPostComments } from './actions/postComments';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPostComments(1));
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <h1> Leddit! </h1>
          <Login />
          <CommentList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
