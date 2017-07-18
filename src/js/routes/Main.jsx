import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';
import Authenticated from './Authenticated';

import Login from '../containers/Login';
import SubredditList from '../containers/SubredditList';
import Subreddit from './Subreddit';

const Main = ({ isAuthenticating, user }) => (
  <main>
    <Switch>
      <Authenticated exact path='/subscriptions'
        isAuthenticating={isAuthenticating}
        user={user}
        Component={SubredditList} />
      <Route exact path='/login' component={Login} />
      <Route path='/r' component={Subreddit} />
      <Redirect from='/' to='/login' />
    </Switch>
  </main>
);

Main.propTypes = {
  isAuthenticating: PropTypes.bool,
  user: PropTypes.object
};
export default Main;
