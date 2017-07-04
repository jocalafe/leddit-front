import * as actionTypes from '../constants/actionTypes';

import subreddit from '../entities/subreddit';

const initialState = {
  isFetchingSubscriptions: false,
  subscriptions: subreddit(-1, 'initial state')
};

const subscriptionsReducer = {
};
