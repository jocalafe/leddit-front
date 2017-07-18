import React from 'react';
import { Card as MuiCard } from 'material-ui/Card';
import PropTypes from 'prop-types';

const Card = ({ children,
  style,
  containerStyle,
  expandable = false,
  expanded,
  initiallyExpanded = false,
  onExpandChange }) => (
    <MuiCard style={style}
      containerStyle={containerStyle}
      expandable={expandable}
      expanded={expanded}
      initiallyExpanded={initiallyExpanded}
      onExpandChange={onExpandChange}>
      {children}
    </MuiCard>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.object,
  containerStyle: PropTypes.string,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  initiallyExpanded: PropTypes.bool,
  onExpandChange: PropTypes.func
};

export default Card;
