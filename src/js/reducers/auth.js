import * as actionTypes from '../constants/actionTypes';

import user from '../entities/user';

const initialState = {
  isAuthenticating: false,
  isFetchingSubscriptions: false,
  user: user(-1, ''),
  status: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthenticating: true
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: { ...action.payload.user },
        status: 'Login successfull'
      };
    case actionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        status: 'Login error'
      };
    case actionTypes.FETCH_SUBSCRIPTIONS_REQUEST:
      return {
        ...state,
        isFetchingSubscriptions: true
      };
    case actionTypes.FETCH_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        isFetchingSubscriptions: false,
        user: user(state.user.id, state.user.name, [...action.payload.subscriptions])
      };
    case actionTypes.FETCH_SUBSCRIPTIONS_FAILURE:
      return {
        ...state,
        isFetchingSubscriptions: false
      };
    default:
      return { ...state };
  }
};

export default authReducer;
