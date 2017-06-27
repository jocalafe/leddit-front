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

export default LedditIconButton;

