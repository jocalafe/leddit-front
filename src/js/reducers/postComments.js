import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetchingComments: false,
  comments: []
};

const postCommentsReducer = (state = initialState, action) => {
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
        comments: [...action.payload.comments]
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
