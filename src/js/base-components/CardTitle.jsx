import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle as MuiCardTitle } from 'material-ui/Card';

const CardTitle = ({ title, subtitle, children }) => (
  <MuiCardTitle title={title}
    subtitle={subtitle}>
    {children}
  </MuiCardTitle>
);

CardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default CardTitle;
