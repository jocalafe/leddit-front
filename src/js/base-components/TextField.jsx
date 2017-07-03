import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const LedditTextField = ({ input, hint, type, disabled = false, meta, ...rest }) => (
  <div>
    <TextField
      {...input}
      hintText={hint}
      floatingLabelText={hint}
      type={type}
      disabled={disabled}
      {...meta}
      {...rest} />
  </div>
);

LedditTextField.propTypes = {
  input: PropTypes.object,
  hint: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object
};

export default LedditTextField;
