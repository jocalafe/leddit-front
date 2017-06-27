import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

import authReducer from './auth';
import postCommentsReducer from './postComments.js';

const reducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  post: postCommentsReducer
});
const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;
