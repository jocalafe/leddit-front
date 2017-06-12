import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

import authReducer from './auth';

const reducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer
});
const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;
