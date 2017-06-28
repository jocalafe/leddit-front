import React from 'react';

import Card from '../base-components/Card';
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

export default Post;
