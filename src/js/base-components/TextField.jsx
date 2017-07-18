import React from 'react';
import MuiTextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const TextField = ({ hint,
  type,
  disabled = false,
  meta,
  input,
  ...rest }) => (
    <div>
      <MuiTextField hintText={hint}
        floatingLabelText={hint}
        type={type}
        disabled={disabled}
        errorText={meta.touched && meta.errorText}
        {...input}
        {...rest} />
    </div>
);

TextField.propTypes = {
  hint: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  input: PropTypes.object
};

export default TextField;
