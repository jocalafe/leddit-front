import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actionTypes from '../constants/actionTypes';
import { fetchPostComments } from '../actions/postComments';

import comment from '../entities/comment';
import user from '../entities/user';
import post from '../entities/post';

const mockStore = configureMockStore([thunk]);

describe('fetchPostComments action creator', () => {
  it('creates actionTypes.FETCH_POST_COMMENTS_SUCCESS when fetching post comments has been done', () => {
    const store = mockStore({ post: {} });
    const post1 = post(1, 'posttitle', 'postlink', 'desc', user('user'));
    const comments = [comment(1, 'lmao', user('testuser'),
      [comment(11, 'lul', user('test2'), [comment(21, 'rofl')]), comment(12, 'lils')]),
      comment(2, 'lmeo')];
    const expectedActions = [
      {
        type: actionTypes.FETCH_POST_COMMENTS_REQUEST
      },
      {
        type: actionTypes.FETCH_POST_COMMENTS_SUCCESS
      },
      {
        type: actionTypes.SET_CURRENT_POST,
        payload: {
          comments,
          post: post1
        }
      }
    ];
    return store.dispatch(fetchPostComments(post1))
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
    return store.dispatch(fetchPostComments(post(2, 'posttitle', 'postlink', 'desc', user('user'))))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
