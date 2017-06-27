import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constants/actionTypes';
import { fetchUserLogin } from '../api/auth';

export function loginUser(userName, password) {
  return (dispatch) => {
    dispatch(loginUserRequest());
    return fetchUserLogin(userName, password).then((user) => {
      dispatch(loginUserSuccess(user));
    }).catch(() => {
      dispatch(loginUserFailure());
    });
  };
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  };
}

export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { user }
  };
}

export function loginUserFailure() {
  return {
    type: LOGIN_USER_FAILURE
  };
}
