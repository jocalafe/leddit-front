import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import TextField from '../base-components/TextField';
import Button from '../base-components/Button';

const Login = ({ handleSubmit, authValues, user }) => (
  <form onSubmit={event => handleSubmit(event, authValues)}>
    <div>
      <Field name='username' component={TextField} id='username1' hint='User Name' />
    </div>
    <div>
      <Field name='password' component={TextField} id='password1' hint='Password' type='password' />
    </div>
    <div>
      <Button type='submit' buttonStyle='raised' primary={true}>
        Submit
      </Button>
    </div>
    {user && user.id !== -1 && <Redirect to='/subscriptions' />}
  </form>
);

Login.propTypes = {
  handleSubmit: PropTypes.func,
  authValues: PropTypes.object,
  user: PropTypes.object
};

export default reduxForm({ form: 'LoginForm' })(Login);

