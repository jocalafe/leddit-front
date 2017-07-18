import React from 'react';
import MuiIconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';

const IconButton = ({ children, href, onTouchTap, ...rest }) => (
  <MuiIconButton onTouchTap={onTouchTap}
    href={href}
    {...rest}>
    { children }
  </MuiIconButton>
);

IconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  href: PropTypes.string,
  onTouchTap: PropTypes.func
};

export default IconButton;

