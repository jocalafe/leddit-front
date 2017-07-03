import React from 'react';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';

const LedditIconButton = ({ children, href, onTouchTap, ...rest }) => (
  <IconButton onTouchTap={onTouchTap}
    href={href}
    {...rest}>
    { children }
  </IconButton>
);

LedditIconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  href: PropTypes.string,
  onTouchTap: PropTypes.func
};

export default LedditIconButton;

