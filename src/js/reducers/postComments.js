import * as actionTypes from '../constants/actionTypes';

import post from '../entities/post';

const initialState = {
  isFetchingComments: false,
  currentPost: post()
};

const postCommentsReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case actionTypes.FETCH_POST_COMMENTS_REQUEST:
      return {
        ...state,
        isFetchingComments: true
      };
    case actionTypes.FETCH_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        isFetchingComments: false,
      };
    case actionTypes.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: post(payload.post.id,
          payload.post.title,
          payload.post.link,
          payload.post.description,
          payload.post.author,
          payload.comments)
      };
    case actionTypes.FETCH_POST_COMMENTS_FAILURE:
      return {
        ...state,
        isFetchingComments: false,
      };
    default:
      return { ...state };
  }
};

export default postCommentsReducer;
