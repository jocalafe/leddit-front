import React from 'react';
import { reduxForm, Field } from 'redux-form';

import TextField from '../base-components/TextField';
import Button from '../base-components/Button';

let Login = ({ handleSubmit, authValues, status, ...rest}) => (
  <form onSubmit={event => handleSubmit(event, authValues)}>
    <p>{status}</p>
    <div>
      <Field name='userName' component={TextField} hint='User Name'/>
    </div>
    <div>
      <Field name='password' component={TextField} hint='Password' type='password'/>
    </div>
    <div>
      <Button type='submit' primary={true}> Submit </Button>
    </div>
  </form>
);

Login = reduxForm({
  form: 'LoginForm'
})(Login);

export default Login;
