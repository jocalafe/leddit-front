import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../base-components/ListItem';

import VoteCounter from './VoteCounter';
import commentArrayToComponentArray from '../utils/commentArrayToComponentArray';

const Comment = ({ className, text, commentsHandler, voteHandler }) => (
  <div className={className}>
    <ListItem className='list-item'
      disabled={true}
      nestedItems={commentArrayToComponentArray(commentsHandler.comments, 'nested-item')}>
      <VoteCounter voteHandler={voteHandler} />
      <div className='item-text'>
        {text}
      </div>
    </ListItem>
  </div>
);

Comment.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  commentsHandler: PropTypes.object,
  voteHandler: PropTypes.object
};
export default Comment;
