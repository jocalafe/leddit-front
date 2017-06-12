import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const LedditButton = ({ type, children, backgroundColor, container, disabled, href, icon, label, labelColor, onTouchTap}) => (
  <div>
    <RaisedButton 
      type={type}
      backgroundColor={backgroundColor}
      containerElement={container}
      disabled={disabled}
      href={href}
      icon={icon}
      label={label}
      labelColor={labelColor}
      onTouchTap={onTouchTap}>
      {children}
    </RaisedButton>
  </div>
);

LedditButton.propTypes = {
  backgroundColor: PropTypes.string,
  containerElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string
}

export default LedditButton;
