import { createArticleTypes } from '../../actions/types';
import createReducer from '../../reducers/createArticleReducer';

describe('test create Article reducer', () => {
  it('should return initial state', () => {
    expect(createReducer(undefined, {})).toEqual({
      payload: {},
      isValid: false,
    });
  });
  it('should update state when an article is created', () => {
    expect(createReducer(undefined,
      {
        type: createArticleTypes.CREATE_SUCCESS,
        payload: {},
      })).toEqual({ payload: {}, isValid: true });
  });
  it('should update error state on article creation failure', () => {
    expect(createReducer(undefined,
      {
        type: createArticleTypes.CREATE_FAILURE,
        error: {},
      })).toEqual({ error: {} });
  });
});
