import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../base-components/ListItem';
import Button from '../base-components/Button';

import VoteCounter from './VoteCounter';

const PostItem = ({ className, post, onTouchTap }) => (
  <div className={className}>
    <ListItem className='list-item'>
      <VoteCounter voteHandler={post.voteHandler} />
      <Button className='item-text'
        onTouchTap={onTouchTap}>
        {post.title}
      </Button>
    </ListItem>
  </div>
);

PostItem.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object,
  onTouchTap: PropTypes.func
};

export default PostItem;
