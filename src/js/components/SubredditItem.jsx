import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../base-components/ListItem';

import VoteCounter from './VoteCounter';

const SubredditItem = ({ className, subreddit }) => (
  <div className={className}>
    <ListItem className='list-item'>
      <VoteCounter voteHandler={subreddit.voteHandler} />
      <div className='item-text'> {subreddit.title} </div>
    </ListItem>
  </div>
);

SubredditItem.propTypes = {
  className: PropTypes.string,
  subreddit: PropTypes.object
};

export default SubredditItem;
