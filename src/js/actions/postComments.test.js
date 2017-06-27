import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actionTypes from '../constants/actionTypes';
import { fetchPostComments } from '../actions/postComments';

import comment from '../entities/comment';
import user from '../entities/user';

const mockStore = configureMockStore([thunk]);

describe('fetchPostComments action creator', () => {
  it('creates actionTypes.FETCH_POST_COMMENTS_SUCCESS when fetching post comments has been done', () => {
    const store = mockStore({ post: {} });
    const expectedActions = [
      {
        type: actionTypes.FETCH_POST_COMMENTS_REQUEST
      },
      {
        type: actionTypes.FETCH_POST_COMMENTS_SUCCESS,
        payload: {
          comments: [comment(1, 'testcomment', user('user'), [], [])]
        }
      }
    ];
    return store.dispatch(fetchPostComments(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates actionTypes.FETCH_POST_COMMENTS_FAILURE when fetching post comments encounters an error', () => {
    const store = mockStore({ post: {} });
    const expectedActions = [
      {
        type: actionTypes.FETCH_POST_COMMENTS_REQUEST
      },
      {
        type: actionTypes.FETCH_POST_COMMENTS_FAILURE
      }
    ];
    return store.dispatch(fetchPostComments(2))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
