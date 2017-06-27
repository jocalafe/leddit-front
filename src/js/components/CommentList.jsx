import React from 'react';

import List from '../base-components/List';

import Comment from './Comment';
import commentArrayToComponentArray from '../utils/commentArrayToComponentArray';

const CommentList = ({ comments, ...rest }) => (
  <List {...rest}>
    { commentArrayToComponentArray(comments) }
  </List>
);

export default CommentList;
