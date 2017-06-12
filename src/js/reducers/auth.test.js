import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constants/actionTypes';
import authReducer from './auth';

describe('auth reducer', () => {
  it('can authenticate a user', () => {
    expect(authReducer({}, {
      type: LOGIN_USER_SUCCESS,
      payload: {
        isAuthenticated: true
      }
    })).toEqual({
      isAuthenticating: false,
      isAuthenticated: true,
      status: 'Login successfull'
    });
  });

  it('can save an authentication error', () => {
    expect(authReducer({}, {
      type: LOGIN_USER_FAILURE
    })).toEqual({
      isAuthenticating: false,
      isAuthenticated: false,
      status: 'Login error'
    });
  });

  it('can save authentication request in process', () => {
    expect(authReducer({}, {
      type: LOGIN_USER_REQUEST
    })).toEqual({
      isAuthenticating: true,
    });
  });
});
