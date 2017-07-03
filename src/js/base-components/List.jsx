import React from 'react';
import { List } from 'material-ui/List';
import PropTypes from 'prop-types';

const LedditList = ({ children }) => (
  <List> {children} </List>
);

LedditList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node])
};

export default LedditList;
