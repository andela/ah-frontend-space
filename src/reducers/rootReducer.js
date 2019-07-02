import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import user from './signInReducers/signInReducer';
import apiCallsInProgress from './apiStatusReducers/apiStatusReducers';

export default combineReducers({
  index: indexReducer,
  user,
  apiCallsInProgress,

});
