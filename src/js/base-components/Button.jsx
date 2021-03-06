import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

const Button = ({ className,
  buttonStyle,
  type,
  children,
  backgroundColor,
  container,
  disabled,
  href,
  icon,
  label,
  onTouchTap }) => {
  const ButtonStyle = buttonStyle === 'raised' ? RaisedButton : FlatButton;
  return (
    <div className={className}>
      <ButtonStyle
        type={type}
        backgroundColor={backgroundColor}
        containerElement={container}
        disabled={disabled}
        href={href}
        icon={icon}
        label={label}
        onTouchTap={onTouchTap}>
        {children}
      </ButtonStyle>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  buttonStyle: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  backgroundColor: PropTypes.string,
  container: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  onTouchTap: PropTypes.func,
};

export default Button;
