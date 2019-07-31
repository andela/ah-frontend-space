import { rateArticle } from '../actions/types';

const initialState = {
  userRate: 0,
};

const rateArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case rateArticle.RATE_ARTICLE_SUCCESS:
      return {
        ...state,
        userRate: action.payload,
      };
    case rateArticle.RATE_ARTICLE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default rateArticleReducer;
