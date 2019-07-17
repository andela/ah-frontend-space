import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import user from './signInReducers/signInReducer';
import apiCallsInProgress from './apiStatusReducers/apiStatusReducers';
import signupReducer from './signupReducer';
import socialAuthReducer from './socialAuthReducer';

export default combineReducers({
  index: indexReducer,
  user,
  apiCallsInProgress,
  signupReducer,
  socialAuth: socialAuthReducer,

});
