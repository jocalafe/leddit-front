import * as actionTypes from '../constants/actionTypes';
import { fetchUserLogin } from '../api/auth';
import { fetchUserSubscriptions } from '../api/subscriptions';

export function loginUser(userName, password) {
  return (dispatch) => {
    dispatch(loginUserRequest());
    return fetchUserLogin(userName, password).then((user) => {
      dispatch(loginUserSuccess(user));
      dispatch(fetchSubscriptions(user));
    }).catch(() => {
      dispatch(loginUserFailure());
    });
  };
}

function loginUserRequest() {
  return {
    type: actionTypes.LOGIN_USER_REQUEST
  };
}

function loginUserSuccess(user) {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: { user }
  };
}

function loginUserFailure() {
  return {
    type: actionTypes.LOGIN_USER_FAILURE
  };
}

export function fetchSubscriptions(user) {
  return (dispatch) => {
    dispatch(fetchSubscriptionsRequest());
    return fetchUserSubscriptions(user.id).then((subscriptions) => {
      dispatch(fetchSubscriptionsSuccess(user, subscriptions));
    }).catch(() => {
      dispatch(fetchSubscriptionsFailure());
    });
  };
}

function fetchSubscriptionsRequest() {
  return {
    type: actionTypes.FETCH_SUBSCRIPTIONS_REQUEST
  };
}

function fetchSubscriptionsSuccess(user, subscriptions) {
  return {
    type: actionTypes.FETCH_SUBSCRIPTIONS_SUCCESS,
    payload: { user, subscriptions }
  };
}

function fetchSubscriptionsFailure() {
  return {
    type: actionTypes.FETCH_SUBSCRIPTIONS_FAILURE
  };
}
