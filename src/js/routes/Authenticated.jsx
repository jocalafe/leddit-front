import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const Authenticated = ({ isAuthenticating, user, Component, ...rest }) => (
  <Route {...rest} render={() => {
    if (isAuthenticating) {
      return <div />;
    }
    return user.id !== -1 ? <Component /> : <Redirect to='/login' />;
  }} />
);

Authenticated.propTypes = {
  isAuthenticating: PropTypes.bool,
  user: PropTypes.object,
  Component: PropTypes.func
};

export default Authenticated;
