import React from 'react';
import PropTypes from 'prop-types';

import List from '../base-components/List';

import PostItem from './PostItem';

const PostList = ({ posts, handleTouchTap, history, ...rest }) => (
  <List {...rest}>
    {posts.map((post, index) => <PostItem key={index} post={post} onTouchTap={() => handleTouchTap(history, post)} />)}
  </List>
);

PostList.propTypes = {
  posts: PropTypes.array,
  handleTouchTap: PropTypes.func,
  history: PropTypes.object
};

export default PostList;
