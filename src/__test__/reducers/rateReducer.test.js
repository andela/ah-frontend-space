import { rateArticle } from '../../actions/types';
import rateArticleReducer from '../../reducers/rateReducer';


describe('test create Article reducer', () => {
  it('should update state when an article is created', () => {
    expect(rateArticleReducer(undefined,
      {
        type: rateArticle.RATE_ARTICLE_SUCCESS,
        payload: {},
      })).toEqual({ userRate: {} });
  });
  it('should update error state on article creation failure', () => {
    expect(rateArticleReducer(undefined,
      {
        type: rateArticle.RATE_ARTICLE_FAILURE,
        error: {},
      })).toEqual({ userRate: 0 });
  });
});
