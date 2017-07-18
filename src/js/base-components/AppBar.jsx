import React from 'react';
import MuiAppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const AppBar = ({ className,
  iconElementLeft,
  iconElementRight,
  iconClassNameLeft,
  iconClassNameRight,
  onLeftIconButtonTouchTap,
  onRightIconButtonTouchTap,
  onTitleTouchTap,
  showMenuIconButton,
  title }) => (
    <MuiAppBar className={className}
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

AppBar.propTypes = {
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

export default AppBar;
