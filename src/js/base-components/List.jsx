import React from 'react';
import { List as MuiList } from 'material-ui/List';
import PropTypes from 'prop-types';

const List = ({ children }) => (
  <MuiList> {children} </MuiList>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default List;
