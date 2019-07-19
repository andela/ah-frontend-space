import resetPasswordReducer from '../../../reducers/passwordResetReducers/passwordResetReducer';
import * as passwordResetActions from '../../../actions/passwordResetActions/passwordResetActions';

describe('resetPasswordReducer', () => {
  const state = {};
  it('it tests the reducer is called', () => {
    const newstate = resetPasswordReducer(state, {});
    expect(newstate).toEqual(state);
  });

  it('should not change state when email is verified', () => {
    const newstate = resetPasswordReducer(state, passwordResetActions.confirmEmailSuccess());
    expect(newstate).toEqual(state);
  });

  it('should not change state when a password is reset ', () => {
    const newstate = resetPasswordReducer(state, passwordResetActions.resetPasswordSuccess());
    expect(newstate).toEqual(state);
  });

  it('should not change state when a password reset fails', () => {
    const newstate = resetPasswordReducer(state, passwordResetActions.resetPasswordFailure());
    expect(newstate).toEqual(state);
  });
});
