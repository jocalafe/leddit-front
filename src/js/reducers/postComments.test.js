import * as actionTypes from '../constants/actionTypes';

import user from '../entities/user';
import comment from '../entities/comment';
import postCommentsReducer from './postComments';

describe('postComents reducer', () => {
  const comments = [comment(1, 'testcomment', user('user'), [], [])];
  it('can fetch the comments', () => {
    expect(postCommentsReducer({}, {
      type: actionTypes.FETCH_POST_COMMENTS_SUCCESS,
      payload: {
        comments
      }
    })).toEqual({
      isFetchingComments: false,
      comments
    });
  });
});
