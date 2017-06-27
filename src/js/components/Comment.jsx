import React from 'react';

import ListItem from '../base-components/ListItem';

import CommentList from './CommentList';
import VoteCounter from './VoteCounter';
import commentArrayToComponentArray from '../utils/commentArrayToComponentArray';

const Comment = ({ className, text, commentsHandler, voteHandler }) => {
  const nestedItems = commentArrayToComponentArray(commentsHandler.comments, 'nested-comment');
  return (
    <div className = {className || ''}>
      <ListItem className='comment'
        nestedItems={nestedItems}>
          <VoteCounter voteHandler={voteHandler}/>
          <div className='comment-text'> {text} </div>
      </ListItem>
    </div>
  );
};

export default Comment;
