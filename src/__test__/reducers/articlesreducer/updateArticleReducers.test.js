import updateArticleReducer from '../../../reducers/articleReducer/updateArticleReducers';
import * as updateArticleActions from '../../../actions/articleActions/updateArticleActions';

describe('updateArticleReducers', () => {
  it('should handle a success response', () => {
    const state = {
      data: {},
    };
    const article = {
      data: {},
    };
    const newState = updateArticleReducer(
      state, updateArticleActions.updateArticleSuccess(article),
    );
    expect(newState).toEqual(state);
  });

  it('should handle a failure response', () => {
    const state = {
      error: {
      },
    };
    const error = {
    };
    const newState = updateArticleReducer(
      state, updateArticleActions.updateArticleFailure(error),
    );
    expect(newState).toEqual(state);
  });
});
