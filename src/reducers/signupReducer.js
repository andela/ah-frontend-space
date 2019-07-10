import { REGISTER_USER, REGISTER_USER_SUCESS, REGISTER_USER_FAILURE } from '../actions/types';

const initialState = {
  isSigningUp: false,
  user: {},
  error: {},
};
const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isSigningUp: action.payload,
      };
    case REGISTER_USER_SUCESS:
      return {
        ...state,
        isSigningUp: false,
        user: action.payload,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
