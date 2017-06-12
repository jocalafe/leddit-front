import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constants/actionTypes';
import { fetchUserLogin } from '../api/auth';

export function loginUser(userName, password) {
  return (dispatch) => {
    dispatch(loginUserRequest(userName, password));
    return fetchUserLogin(userName, password).then((userData) => {
      dispatch(loginUserSuccess(userData));
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

export function loginUserSuccess(userData) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { ...userData }
  };
}

export function loginUserFailure() {
  return {
    type: LOGIN_USER_FAILURE
  };
}
