import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../base-components/ListItem';
import Button from '../base-components/Button';

import VoteCounter from './VoteCounter';

const PostItem = ({ post, onTouchTap }) => (
  <div className='list-item'>
    <ListItem disabled={true}>
      <VoteCounter voteHandler={post.voteHandler} />
      <Button className='item-text'
        hoverColor='#FFFFF'
        onTouchTap={onTouchTap}>
        {post.title}
      </Button>
    </ListItem>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object,
  onTouchTap: PropTypes.func
};

export default PostItem;
