import * as actionTypes from '../constants/actionTypes';

import subreddit from '../entities/subreddit';

const initialState = {
  isFetchingPosts: false,
  currentSubreddit: subreddit(-1, 'initial state')
};

const subredditPostsReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case actionTypes.FETCH_SUBREDDIT_POSTS_REQUEST:
      return {
        ...state,
        isFetchingPosts: true
      };
    case actionTypes.FETCH_SUBREDDIT_POSTS_SUCCESS:
      return {
        ...state,
        isFetchingPosts: false,
      };
    case actionTypes.SET_CURRENT_SUBREDDIT:
      return {
        ...state,
        currentSubreddit: subreddit(payload.subreddit.id,
          payload.subreddit.name,
          payload.subreddit.banner,
          payload.posts)
      };
    case actionTypes.FETCH_SUBREDDIT_POSTS_FAILURE:
      return {
        ...state,
        isFetchingPosts: false,
      };
    default:
      return { ...state };
  }
};

export default subredditPostsReducer;
