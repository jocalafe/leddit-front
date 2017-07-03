import React from 'react';
import { CardMedia } from 'material-ui/Card';
import PropTypes from 'prop-types';

const LedditCardMedia = ({ overlay, children }) => (
  <CardMedia overlay={overlay}>
    {children}
  </CardMedia>
);

LedditCardMedia.propTypes = {
  overlay: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node])
};

export default LedditCardMedia;
