import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '../base-components/ListItem';
import Button from '../base-components/Button';

import VoteCounter from './VoteCounter';

const SubredditItem = ({ subreddit, onTouchTap }) => (
  <div className='list-item'>
    <ListItem disabled={true}>
      <VoteCounter voteHandler={subreddit.voteHandler} />
      <Button className='item-text'
        hoverColor='#FFFFF'
        onTouchTap={onTouchTap}
        container={<Link to={`/r/${subreddit.name}`} />}>
        {subreddit.name}
      </Button>
    </ListItem>
  </div>
);

SubredditItem.propTypes = {
  subreddit: PropTypes.object,
  onTouchTap: PropTypes.func
};

export default SubredditItem;
