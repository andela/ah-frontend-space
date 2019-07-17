import socialAuthReducer from '../../reducers/socialAuthReducer';
import { actionTypes } from '../../actions/types';

const initialState = {
  isAuthenticated: false,
  payload: '',
  error: '',

};

describe('socialAuthReducer', () => {
  it('should return initial state', () => {
    expect(socialAuthReducer(undefined, {})).toEqual(initialState);
  });
  it('should update the state on GOOGLE_LOGIN_SUCCESS', () => {
    expect(socialAuthReducer(
      undefined,
      {
        type: actionTypes.GOOGLE_LOGIN_SUCCESS,
        payload: { message: 'user successfully logged in' },

      },
    )).toEqual({
      isAuthenticated: true,
      payload: { message: 'user successfully logged in' },
      error: '',
    });
  });

  it('should update the state on failure on GOOGLE_FAILURE', () => {
    expect(socialAuthReducer(
      undefined,
      {
        type: actionTypes.GOOGLE_FAILURE,
        error: { error: 'Request failed with status code 400' },

      },
    )).toEqual({
      isAuthenticated: false,
      error: { error: 'Request failed with status code 400' },
      payload: '',
    });
  });

  it('should update the state on facebook success', () => {
    expect(socialAuthReducer(
      undefined,
      {
        type: actionTypes.FACEBOOK_LOGIN_SUCCESS,
        payload: { message: 'user successfully logged in' },

      },
    )).toEqual({
      isAuthenticated: true,
      payload: { message: 'user successfully logged in' },
      error: '',
    });
  });

  it('should update the state on facebook failure', () => {
    expect(socialAuthReducer(
      undefined,
      {
        type: actionTypes.FACEBOOK_FAILURE,
        error: { error: 'Request failed with status code 400' },

      },
    )).toEqual({
      isAuthenticated: false,
      error: { error: 'Request failed with status code 400' },
      payload: '',
    });
  });
});
