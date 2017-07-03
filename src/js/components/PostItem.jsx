import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../base-components/ListItem';

import VoteCounter from './VoteCounter';

const PostItem = ({ className, post }) => (
  <div className={className}>
    <ListItem className='comment'>
      <VoteCounter voteHandler={post.voteHandler} />
      <div className='comment-text'> {post.title} </div>
    </ListItem>
  </div>
);

PostItem.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object
};

export default PostItem;