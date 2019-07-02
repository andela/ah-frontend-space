import signInReducer from '../../../reducers/signInReducers/signInReducer';
import * as signInActions from '../../../actions/siginInActions/signInActions';
import { registeredUser, state, errors } from '../../mock/data';


describe('test signIn reducer', () => {
  it('it tests the reducer is called', () => {
    const newstate = signInReducer(state, {});
    expect(newstate).toEqual(state);
  });

  it('should return true when a user successfully signs in', () => {
    const newstate = signInReducer(state, signInActions.signInSuccess(registeredUser));
    expect(newstate.isAuthenticated).toEqual(true);
  });

  it('should return false when a user sign in fails', () => {
    const newstate = signInReducer(state, signInActions.signInFailure(errors));
    expect(newstate.isAuthenticated).toEqual(false);
  });
});
