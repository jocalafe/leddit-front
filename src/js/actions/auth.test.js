import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actionTypes from '../constants/actionTypes';
import { loginUser } from '../actions/auth';

import { testUser, subscriptions } from '../api/tmpApiData';

const mockStore = configureMockStore([thunk]);

describe('login user action creator', () => {
  it('creates LOGIN_USER_SUCCESS when fetching login has been done', () => {
    const store = mockStore({ auth: {} });
    const expectedActions = [
      {
        type: actionTypes.LOGIN_USER_REQUEST
      },
      {
        type: actionTypes.LOGIN_USER_SUCCESS,
        payload: {
          user: testUser
        }
      },
      {
        type: actionTypes.FETCH_SUBSCRIPTIONS_REQUEST
      },
      {
        type: actionTypes.FETCH_SUBSCRIPTIONS_SUCCESS,
        payload: { user: testUser, subscriptions }
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
        type: actionTypes.LOGIN_USER_REQUEST
      },
      {
        type: actionTypes.LOGIN_USER_FAILURE
      },
    ];
    return store.dispatch(loginUser('aaa', 'aaa'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
