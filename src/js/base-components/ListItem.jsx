import React from 'react';
import { ListItem as MuiListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

const ListItem = ({ nestedItems, children, ...rest }) => (
  <MuiListItem nestedItems={nestedItems} {...rest}>
    {children}
  </MuiListItem>
);

ListItem.propTypes = {
  nestedItems: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ListItem;
