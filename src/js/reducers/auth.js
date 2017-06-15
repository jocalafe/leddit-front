import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constants/actionTypes';

const initialState = {
  isAuthenticating: false,
  user: null,
  status: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthenticating: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: Object.assign(action.payload.user),
        status: 'Login successfull'
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        status: 'Login error'
      };
    default:
      return { ...state };
  }
};

export default authReducer;
