import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';

const LedditCardTitle = ({ title, subtitle, children }) => (
  <CardTitle title={title}
    subtitle={subtitle}>
    {children}
  </CardTitle>
);

LedditCardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
};

export default LedditCardTitle;
