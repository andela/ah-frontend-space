import articleDetailReducer from '../../../reducers/articleReducer/articleDetailReducer';
import { articleDetailActionTypes } from '../../../actions/types';

describe('test Article reducer', () => {
  it('should return the initial state', () => {
    expect(articleDetailReducer(undefined, {})).toEqual({
      article: {},
    });
  });

  it('should update state when an article is returned successfully', () => {
    expect(
      articleDetailReducer(
        undefined,
        {
          type: articleDetailActionTypes.GET_ONE_ARTICLE_SUCCESS,
          payload: {},

        },
      ),
    ).toEqual({
      article: {},
    });
  });

  it('should update store when fails to get an article', () => {
    expect(
      articleDetailReducer(
        undefined,
        {
          type: articleDetailActionTypes.GET_ONE_ARTICLE_FAILURE,
          error: {},

        },
      ),
    ).toEqual({
      error: {},
      article: {},

    });
  });
});
