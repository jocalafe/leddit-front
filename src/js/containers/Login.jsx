import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import { loginUser } from '../actions/auth';

import Login from '../components/Login';

function mapStateToProps(state) {
  const selector = formValueSelector('LoginForm');
  return {
    authValues: {
      userName: selector(state, 'username'),
      password: selector(state, 'password')
    },
    isAuthenticated: state.auth.isAuthenticated,
    status: state.auth.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit(event, { userName, password }) {
      event.preventDefault();
      dispatch(loginUser(userName, password));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
