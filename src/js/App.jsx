import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "isomorphic-fetch";

import Login from './containers/Login';
import Post from './containers/Post';
import { fetchPostComments } from './actions/postComments';
import post from './entities/post';
import user from './entities/user';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPostComments(post(1, 'posttitle', 'postlink', 'desc', user('user'))));
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <h1> Leddit! </h1>
          <Login />
          <Post />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
