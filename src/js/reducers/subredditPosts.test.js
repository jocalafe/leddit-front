import * as actionTypes from '../constants/actionTypes';

import user from '../entities/user';
import subreddit from '../entities/subreddit';
import post from '../entities/post';
import subredditPostsReducer from './subredditPosts';

describe('subredditPosts reducer', () => {
  const posts = [post(1, 'posttitle', 'www.facebook.com', 'desc', user('user'))];
  const subreddit1 = subreddit(1, 'subredditname');
  it('can fetch the currentSubrredit', () => {
    expect(subredditPostsReducer({}, {
      type: actionTypes.SET_CURRENT_SUBREDDIT,
      payload: {
        subreddit: subreddit1,
        posts
      }
    })).toHaveProperty('currentSubreddit');
  });
});
