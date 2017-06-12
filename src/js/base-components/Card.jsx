import React from 'react';
import Card from 'material-ui/Card';
import PropTypes from 'prop-types';

const LedditCard = ({ children,
  style,
  containerStyle,
  expandable = false,
  expanded,
  initiallyExpanded = false,
  onExpandChange,
  showExpandableButton}) => (
    <div>
      <Card style={style}
        containerStyle={containerStyle}
        expandable={expandable}
        expanded={expanded}
        initiallyExpanded={initiallyExpanded}
        onExpandChange={onExpandChange}
        showExpandableButton={showExpandableButton}>
        {children}
      </Card>
    </div>
);

LedditCard.propTypes = {
  children: PropTypes.func,
  style: PropTypes.string,
  containerStyle: PropTypes.string,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  initiallyExpanded: PropTypes.bool,
  onExpandChange: PropTypes.func,
  showExpandableButton: PropTypes.func,
};

export default LedditCard;
