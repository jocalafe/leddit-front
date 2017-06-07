import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const MyTextField = ({ id, hint = '', disabled = false }) => (
  <div>
    <TextField id={id} disabled={disabled} hint={hint} />
  </div>
);

MyTextField.propTypes = {
  id: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MyTextField;
