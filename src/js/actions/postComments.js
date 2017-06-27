import * as actionTypes from '../constants/actionTypes';

import { fetchComments } from '../api/postComments';

export function fetchPostComments(postId) {
  return (dispatch) => {
    dispatch(fetchPostCommentsRequest());
    return fetchComments(postId).then((comments) => {
      dispatch(fetchPostCommentsSuccess(comments));
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

export function fetchPostCommentsSuccess(comments) {
  return {
    type: actionTypes.FETCH_POST_COMMENTS_SUCCESS,
    payload: { comments }
  };
}

export function fetchPostCommentsFailure() {
  return {
    type: actionTypes.FETCH_POST_COMMENTS_FAILURE
  };
}
