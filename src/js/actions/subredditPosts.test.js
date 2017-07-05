import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actionTypes from '../constants/actionTypes';
import { fetchSubredditPosts } from '../actions/subredditPosts';

import subreddit from '../entities/subreddit';
import user from '../entities/user';
import post from '../entities/post';
import { subscriptions, postsDota } from '../api/tmpApiData';

const mockStore = configureMockStore([thunk]);

describe('fetchSubredditPosts action creator', () => {
  it('creates actionTypes.FETCH_SUBREDDIT_POSTS_SUCCESS when fetching subreddit posts has been done', () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: actionTypes.FETCH_SUBREDDIT_POSTS_REQUEST
      },
      {
        type: actionTypes.FETCH_SUBREDDIT_POSTS_SUCCESS
      },
      {
        type: actionTypes.SET_CURRENT_SUBREDDIT,
        payload: {
          subreddit: subscriptions[0],
          posts: [...postsDota]
        }
      }
    ];
    return store.dispatch(fetchSubredditPosts(subscriptions[0]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates actionTypes.FETCH_SUBREDDIT_POSTS_FAILURE when fetching post comments encounters an error', () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: actionTypes.FETCH_SUBREDDIT_POSTS_REQUEST
      },
      {
        type: actionTypes.FETCH_SUBREDDIT_POSTS_FAILURE
      }
    ];
    return store.dispatch(fetchSubredditPosts(subreddit(-1, 'subredditname')))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
