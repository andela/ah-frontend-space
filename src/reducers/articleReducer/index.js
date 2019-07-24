import { articleActionTypes } from '../../actions/types';

const initialState = {
  articles: [],
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case articleActionTypes.GET_ALL_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    case articleActionTypes.GET_ALL_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default articleReducer;
