import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actionTypes from '../constants/actionTypes';
import { loginUser } from '../actions/auth';
import { fetchSubscriptions } from '../actions/subscriptions';

import user from '../entities/user';
import subreddit from '../entities/subreddit';

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
          user: user(1, 'test')
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
        type: actionTypes.LOGIN_USER_REQUEST
      },
      {
        type: actionTypes.LOGIN_USER_FAILURE
      }
    ];
    return store.dispatch(loginUser('aaa', 'aaa'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates actionTypes.FETCH_SUBSCRIPTIONS_SUCCES when fetching subreddit posts has been done', () => {
    const store = mockStore({});
    const user1 = user(1, 'test');
    const subscriptions = [subreddit(1, 'DOTA2'), subreddit(1, 'chelseafc')];
    const expectedActions = [
      {
        type: actionTypes.FETCH_SUBSCRIPTIONS_REQUEST
      },
      {
        type: actionTypes.FETCH_SUBSCRIPTIONS_SUCCES,
        payload: {
          user: user1,
          subscriptions
        }
      }
    ];
    return store.dispatch(fetchSubscriptions(user1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates actionTypes.FETCH_SUBSCRIPTIONS_FAILURE when fetching subscriptions encounters an error', () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: actionTypes.FETCH_SUBSCRIPTIONS_REQUEST
      },
      {
        type: actionTypes.FETCH_SUBSCRIPTIONS_FAILURE
      }
    ];
    return store.dispatch(fetchSubscriptions(user(2, 'test2')))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
