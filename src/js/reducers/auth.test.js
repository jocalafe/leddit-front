import * as actionTypes from '../constants/actionTypes';
import authReducer from './auth';

import user from '../entities/user';
import subreddit from '../entities/subreddit';

describe('auth reducer', () => {
  const user1 = user(1, 'test');
  it('can authenticate a user', () => {
    expect(authReducer({}, {
      type: actionTypes.LOGIN_USER_SUCCESS,
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
      type: actionTypes.LOGIN_USER_FAILURE
    })).toEqual({
      isAuthenticating: false,
      status: 'Login error'
    });
  });

  it('can save authentication request in process', () => {
    expect(authReducer({}, {
      type: actionTypes.LOGIN_USER_REQUEST
    })).toEqual({
      isAuthenticating: true,
    });
  });

  it('can fetch user subscriptions', () => {
    const subscriptions = [subreddit(1, 'DOTA2'), subreddit(1, 'chelseafc')];
    expect(authReducer({ user: { ...user1 } }, {
      type: actionTypes.FETCH_SUBSCRIPTIONS_SUCCESS,
      payload: { subscriptions }
    })).toEqual({
      isFetchingSubscriptions: false,
      user: expect.any(Object)
    });
  });
});
