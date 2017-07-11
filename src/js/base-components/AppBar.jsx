import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const LedditAppBar = ({ className,
  iconElementLeft,
  iconElementRight,
  iconClassNameLeft,
  iconClassNameRight,
  onLeftIconButtonTouchTap,
  onRightIconButtonTouchTap,
  onTitleTouchTap,
  showMenuIconButton,
  title }) => (
    <AppBar className={className}
      iconElementLeft={iconElementLeft}
      iconElementRight={iconElementRight}
      iconClassNameLeft={iconClassNameLeft}
      iconClassNameRight={iconClassNameRight}
      onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
      onRightIconButtonTouchTap={onRightIconButtonTouchTap}
      onTitleTouchTap={onTitleTouchTap}
      showMenuIconButton={showMenuIconButton}
      title={title} />
);

LedditAppBar.propTypes = {
  className: PropTypes.string,
  iconElementLeft: PropTypes.node,
  iconElementRight: PropTypes.node,
  iconClassNameLeft: PropTypes.string,
  iconClassNameRight: PropTypes.string,
  onLeftIconButtonTouchTap: PropTypes.func,
  onRightIconButtonTouchTap: PropTypes.func,
  onTitleTouchTap: PropTypes.func,
  showMenuIconButton: PropTypes.bool,
  title: PropTypes.string
};

export default LedditAppBar;
