import * as actionTypes from '../constants/actionTypes';

import { fetchComments } from '../api/postComments';

export function fetchPostComments(post) {
  return (dispatch) => {
    dispatch(fetchPostCommentsRequest());
    return fetchComments(post.id).then((comments) => {
      dispatch(fetchPostCommentsSuccess());
      dispatch(setCurrentPost(post, comments));
    }).catch(() => {
      dispatch(fetchPostCommentsFailure());
    });
  };
}

export function fetchPostCommentsRequest() {
  return {
    type: actionTypes.FETCH_POST_COMMENTS_REQUEST
  };
}

export function fetchPostCommentsSuccess() {
  return {
    type: actionTypes.FETCH_POST_COMMENTS_SUCCESS
  };
}

export function fetchPostCommentsFailure() {
  return {
    type: actionTypes.FETCH_POST_COMMENTS_FAILURE
  };
}

export function setCurrentPost(post, comments) {
  return {
    type: actionTypes.SET_CURRENT_POST,
    payload: { post, comments }
  };
}
