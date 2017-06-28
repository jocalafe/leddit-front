import * as actionTypes from '../constants/actionTypes';

import user from '../entities/user';
import comment from '../entities/comment';
import post from '../entities/post';
import postCommentsReducer from './postComments';

describe('postComents reducer', () => {
  const comments = [comment(1, 'testcomment', user('user'), [], [])];
  const post1 = post(1, 'posttitle', 'postlink', 'desc', user('user'));
  it('can fetch the comments', () => {
    expect(postCommentsReducer({}, {
      type: actionTypes.SET_CURRENT_POST,
      payload: {
        post: post1,
        comments
      }
    })).toHaveProperty('currentPost');
  });
});
