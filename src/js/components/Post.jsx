import React from 'react';
import PropTypes from 'prop-types';

import CommentList from './CommentList';

const Post = ({ post }) => (
  <div>
    <h1>{ post.title }</h1>
    <div>
      {post.description}
    </div>
    <CommentList comments={post.commentsHandler.comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
