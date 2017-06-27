import React from 'react';

import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

import IconButton from '../base-components/IconButton';

const VoteCounter = ({ voteHandler, onUpVote, onDownVote }) => (
  <div className='vote-counter'>
    <IconButton className='icon-button' onTouchTap={onUpVote}>
      <HardwareKeyboardArrowUp />
    </IconButton>
    <div>{voteHandler.sum}</div>
    <IconButton className='icon-button' onTouchTap={onDownVote}>
      <HardwareKeyboardArrowDown />
    </IconButton>
  </div>
);

export default VoteCounter;
