import React from 'react';
import PropTypes from 'prop-types';

import UpVote from '../icons/UpVote';
import DownVote from '../icons/DownVote';

import IconButton from '../base-components/IconButton';

const VoteCounter = ({ voteHandler, onUpVote, onDownVote }) => (
  <div className='vote-counter'>
    <IconButton className='icon-button' onTouchTap={onUpVote}>
      <UpVote />
    </IconButton>
    <div>{voteHandler.sum}</div>
    <IconButton className='icon-button' onTouchTap={onDownVote}>
      <DownVote />
    </IconButton>
  </div>
);

VoteCounter.propTypes = {
  voteHandler: PropTypes.object,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};

export default VoteCounter;
