import { signIn } from '../../actions/types';

const initialState = {
  data: {},
  isAuthenticated: false,
  error: {},
};

export default function signInReducer(state = initialState, action) {
  switch (action.type) {
    case signIn.SIGNIN_SUCCESS:
      return {
        ...state,
        data: action.data,
        isAuthenticated: true,
      };
    case signIn.SIGNIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
