import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'isomorphic-fetch';

import PostList from './containers/PostList';
import Subreddit from './containers/Subreddit';
import { fetchPostComments } from './actions/postComments';
import { fetchSubredditPosts } from './actions/subredditPosts';

import post from './entities/post';
import user from './entities/user';
import subreddit from './entities/subreddit';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSubredditPosts(subreddit(1, 'subreadditname',
      'http://stuffpoint.com/reddit/image/193559-reddit-reddit-banner.png')));
    this.props.dispatch(fetchPostComments(post(1, 'posttitle', 'postlink', 'desc', user('user'))));
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <h1> Leddit! </h1>
          <Subreddit>
            <PostList />
          </Subreddit>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(App);
