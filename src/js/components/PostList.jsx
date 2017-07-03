import React from 'react';
import PropTypes from 'prop-types';

import List from '../base-components/List';

import PostItem from './PostItem';

const PostList = ({ posts, ...rest }) => (
  <List {...rest}>
    {posts.map((post, index) => <PostItem key={index} post={post} />)}
  </List>
);

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;
