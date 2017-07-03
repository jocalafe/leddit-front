import React from 'react';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

const LedditList = ({ nestedItems, children, ...rest }) => (
  <ListItem nestedItems={nestedItems} {...rest}>
    {children}
  </ListItem>
);

LedditList.propTypes = {
  nestedItems: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node])
};

export default LedditList;
