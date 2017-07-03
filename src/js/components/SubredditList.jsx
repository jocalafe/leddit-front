import React from 'react';
import PropTypes from 'prop-types';

import List from '../base-components/List';

import SubredditItem from './SubredditItem';

const SubredditList = ({ subreddits, ...rest }) => (
  <List {...rest}>
    {subreddits.map((subreddit, index) => <SubredditItem key={index} subreddit={subreddit} />)}
  </List>
);

SubredditList.propTypes = {
  subreddits: PropTypes.object
};

export default SubredditList;
