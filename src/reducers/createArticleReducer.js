import { createArticleTypes } from '../actions/types';

const initialState = {
  payload: {},
  isValid: false,

};
const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case createArticleTypes.CREATE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isValid: true,
      };
    case createArticleTypes.CREATE_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default createReducer;
