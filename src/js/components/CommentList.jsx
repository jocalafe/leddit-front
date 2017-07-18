import React from 'react';
import PropTypes from 'prop-types';

import List from '../base-components/List';

import commentArrayToComponentArray from '../utils/commentArrayToComponentArray';

const CommentList = ({ comments, ...rest }) => (
  <List {...rest}>
    { commentArrayToComponentArray(comments) }
  </List>
);

CommentList.propTypes = {
  comments: PropTypes.array
};

export default CommentList;
