import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import TextField from '../base-components/TextField';
import Button from '../base-components/Button';

const Login = ({ handleSubmit, authValues, status }) => (
  <form onSubmit={event => handleSubmit(event, authValues)}>
    <p>{status}</p>
    <div>
      <Field name='username' component={TextField} id='username1' hint='User Name' />
    </div>
    <div>
      <Field name='password' component={TextField} id='password1' hint='Password' type='password' />
    </div>
    <div>
      <Button type='submit' primary={true}> Submit </Button>
    </div>
  </form>
);

Login.propTypes = {
  handleSubmit: PropTypes.func,
  authValues: PropTypes.object,
  status: PropTypes.string
};

export default reduxForm({ form: 'LoginForm' })(Login);

