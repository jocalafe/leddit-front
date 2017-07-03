import React from 'react';
import PropTypes from 'prop-types';

import Card from '../base-components/Card';
import CardMedia from '../base-components/CardMedia';
import CardTitle from '../base-components/CardTitle';

const Subreddit = ({ subreddit, children }) => (
  <Card expanded={true}>
    <CardMedia>
      <img src={subreddit.banner} alt='' />
    </CardMedia>
    <CardTitle title={subreddit.name} />
    {children}
  </Card>
);

Subreddit.propTypes = {
  subreddit: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node])
};

export default Subreddit;
