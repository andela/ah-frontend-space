import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import signupReducer from './signupReducer';

export default combineReducers({
  index: indexReducer,
  signupReducer,
});
