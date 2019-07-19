import { actionTypes } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  payload: '',
  error: '',
};

const socialAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        payload: action.payload,
      };
    case actionTypes.GOOGLE_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        payload: action.payload,
      };
    case actionTypes.FACEBOOK_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default socialAuthReducer;
