
import { updateArticle } from '../../actions/types';

const initialState = {
  data: {},
  error: {},
};

export default function updateArticleReducer(state = initialState, action) {
  switch (action.type) {
    case updateArticle.UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action.article,
      };
    case updateArticle.UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        error: { ...action.error },
      };
    default:
      return state;
  }
}
