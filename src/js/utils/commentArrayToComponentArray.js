import React from 'react';

import Comment from '../components/Comment';

export default function commentArrayToComponentArray(comments, className) {
  return comments.map(comment => (
    <Comment className={className} key={comment.id}
      text={comment.text}
      commentsHandler={comment.commentsHandler}
      voteHandler={comment.voteHandler} />
  ));
}
