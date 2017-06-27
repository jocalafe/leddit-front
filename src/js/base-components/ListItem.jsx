import React from 'react';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

const LedditList = ({ nestedItems, children, ...rest}) => (
  <ListItem nestedItems={nestedItems} {...rest}>
    {children}
  </ListItem>
);

export default LedditList;
