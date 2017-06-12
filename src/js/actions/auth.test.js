import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constants/actionTypes';
import { loginUser } from '../actions/auth';

const mockStore = configureMockStore([thunk]);

describe('login user action creator', () => {
  it('creates LOGIN_USER_SUCCESS when fetching login has been done', () => {
    const store = mockStore({ auth: {} });
    const expectedActions = [
      {
        type: LOGIN_USER_REQUEST
      },
      {
        type: LOGIN_USER_SUCCESS,
        payload: {
          isAuthenticated: true
        }
      }
    ];
    return store.dispatch(loginUser('test', 'test'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates LOGIN_USER_FAILURE when fetching login encounters an error', () => {
    const store = mockStore({ auth: {} });
    const expectedActions = [
      {
        type: LOGIN_USER_REQUEST
      },
      {
        type: LOGIN_USER_FAILURE
      }
    ];
    return store.dispatch(loginUser('aaa', 'aaa'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
