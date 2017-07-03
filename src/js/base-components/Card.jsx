import React from 'react';
import { Card } from 'material-ui/Card';
import PropTypes from 'prop-types';

const LedditCard = ({ children,
  style,
  containerStyle,
  expandable = false,
  expanded,
  initiallyExpanded = false,
  onExpandChange }) => (
    <Card style={style}
      containerStyle={containerStyle}
      expandable={expandable}
      expanded={expanded}
      initiallyExpanded={initiallyExpanded}
      onExpandChange={onExpandChange}>
      {children}
    </Card>
);

LedditCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
  style: PropTypes.object,
  containerStyle: PropTypes.string,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  initiallyExpanded: PropTypes.bool,
  onExpandChange: PropTypes.func
};

export default LedditCard;
