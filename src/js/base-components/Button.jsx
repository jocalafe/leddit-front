import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const LedditButton = ({ type,
    children,
    backgroundColor,
    container,
    disabled,
    href,
    icon,
    label,
    labelColor,
    onTouchTap }) => (
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
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  backgroundColor: PropTypes.string,
  container: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  onTouchTap: PropTypes.func
};

export default LedditButton;
