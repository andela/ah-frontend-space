import { articleDetailActionTypes } from '../../actions/types';

const initialState = {
  article: {},
};

const articleDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case articleDetailActionTypes.GET_ONE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };
    case articleDetailActionTypes.GET_ONE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default articleDetailReducer;
