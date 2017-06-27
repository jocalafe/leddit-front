import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constants/actionTypes';
import authReducer from './auth';

import user from '../entities/user';

describe('auth reducer', () => {
  const user1 = user('test');
  it('can authenticate a user', () => {
    expect(authReducer({}, {
      type: LOGIN_USER_SUCCESS,
      payload: {
        user: { ...user1 }
      }
    })).toEqual({
      isAuthenticating: false,
      status: 'Login successfull',
      user: { ...user1 }
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
