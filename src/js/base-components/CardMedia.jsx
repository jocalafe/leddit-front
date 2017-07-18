import React from 'react';
import { CardMedia as MuiCardMedia } from 'material-ui/Card';
import PropTypes from 'prop-types';

const CardMedia = ({ overlay, children }) => (
  <MuiCardMedia overlay={overlay}>
    {children}
  </MuiCardMedia>
);

CardMedia.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  overlay: PropTypes.node
};

export default CardMedia;
