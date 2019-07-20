import articleReducer from '../../../reducers/articleReducer';
import { articleActionTypes } from '../../../actions/types';

describe('test Article reducer', () => {
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual({
      articles: [],
    });
  });

  it('should update state when data is returned successfully', () => {
    expect(
      articleReducer(
        undefined,
        {
          type: articleActionTypes.GET_ALL_ARTICLE_SUCCESS,
          payload: [{}, {}],

        },
      ),
    ).toEqual({
      articles: [{}, {}],
    });
  });

  it('should update store when fails to get articles', () => {
    expect(
      articleReducer(
        undefined,
        {
          type: articleActionTypes.GET_ALL_ARTICLE_FAILURE,
          error: {},

        },
      ),
    ).toEqual({
      error: {},
      articles: [],

    });
  });
});
