import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Subreddit from '../containers/Subreddit';
import PostList from '../containers/PostList';
import Post from '../containers/Post';

const SubredditRoute = () => (
  <div>
    <Switch>
      <Route exact path='/r/:name' render={() => (
        <Subreddit>
          <PostList />
        </Subreddit>
      )} />
      <Route path='/r/:name/:postid' render={() => (
        <Subreddit>
          <Post />
        </Subreddit>
      )} />
    </Switch>
  </div>
);

export default SubredditRoute;
