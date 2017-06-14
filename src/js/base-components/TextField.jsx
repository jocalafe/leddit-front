import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const LedditTextField = ({ input, hint, meta, type, ...rest }) => (
  <div>
    <TextField
      {...input}
      hintText={hint}
      floatingLabelText={hint}
      type={type}
      {...rest}/>
  </div>
);

LedditTextField.propTypes = {
  id: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
};

export default LedditTextField;
