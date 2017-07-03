import * as actionTypes from '../constants/actionTypes';
import { fetchPosts } from '../api/subredditPosts';

export function fetchSubredditPosts(subreddit) {
  return (dispatch) => {
    dispatch(fetchSubredditPostsRequest());
    return fetchPosts(subreddit.id).then((posts) => {
      dispatch(fetchSubredditPostsSuccess());
      dispatch(setCurrentSubreddit(subreddit, posts));
    }).catch(() => {
      dispatch(fetchSubredditPostsFailure());
    });
  };
}

export function fetchSubredditPostsRequest() {
  return {
    type: actionTypes.FETCH_SUBREDDIT_POSTS_REQUEST
  };
}

export function fetchSubredditPostsSuccess() {
  return {
    type: actionTypes.FETCH_SUBREDDIT_POSTS_SUCCESS
  };
}

export function fetchSubredditPostsFailure() {
  return {
    type: actionTypes.FETCH_SUBREDDIT_POSTS_FAILURE
  };
}

export function setCurrentSubreddit(subreddit, posts) {
  return {
    type: actionTypes.SET_CURRENT_SUBREDDIT,
    payload: { subreddit, posts }
  };
}
