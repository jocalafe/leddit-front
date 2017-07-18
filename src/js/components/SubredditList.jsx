import React from 'react';
import PropTypes from 'prop-types';

import List from '../base-components/List';

import SubredditItem from './SubredditItem';

const SubredditList = ({ user, handleTouchTap, ...rest }) => (
  <List {...rest}>
    {user.subscriptions.map((subscription, index) => (
      <SubredditItem key={index}
        subreddit={subscription}
        onTouchTap={() => handleTouchTap(subscription)} />
    ))}
  </List>
);

SubredditList.propTypes = {
  user: PropTypes.object,
  handleTouchTap: PropTypes.func
};

export default SubredditList;
