import signupReducer from '../../../reducers/signupReducer';
import { REGISTER_USER, REGISTER_USER_SUCESS, REGISTER_USER_FAILURE } from '../../../actions/types';


describe('test register reducer', () => {
  it('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual({ isSigningUp: false, error: {}, user: {} });
  });

  it('should handle register user request', () => {
    expect(
      signupReducer(
        undefined,
        {
          type: REGISTER_USER,
          payload: true,

        },
      ),
    ).toEqual({ isSigningUp: true, user: {}, error: {} });
  });

  it('should update store when a user successfully registers', () => {
    expect(
      signupReducer(
        undefined,
        {
          type: REGISTER_USER_SUCESS,
          payload: {
            message: 'user registered successfuly',
          },

        },
      ),
    ).toEqual({
      isSigningUp: false,
      user: { message: 'user registered successfuly' },
      error: {},

    });
  });
  it('should update state when there is a failure message', () => {
    expect(
      signupReducer(
        undefined,
        {
          type: REGISTER_USER_FAILURE,
          payload: {
            message: 'username already exists',
          },

        },
      ),
    ).toEqual({
      isSigningUp: false,
      error: { message: 'username already exists' },
      user: {},

    });
  });
});
