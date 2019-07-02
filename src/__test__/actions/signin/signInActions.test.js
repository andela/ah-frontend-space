import thunk from 'redux-thunk';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import { signIn, apiCalls } from '../../../actions/types';
import * as signInactions from '../../../actions/siginInActions/signInActions';
import * as apiStatusActions from '../../../actions/apiActions/apiStatusActions';
import 'regenerator-runtime/runtime';
import { data, user, errors } from '../../mock/data';

jest.mock('axios');

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach((done) => {
    done();
  });

  describe('test that the userSignIn thunk calls the signinApi and stores reponses in the store', () => {
    it('should create SIGNIN_SUCCESS when siging in', () => {
      const store = mockStore({ data: {}, errors: {}, user: {} });
      const expectedActions = [
        { type: apiCalls.API_CALL_START },
        { type: signIn.SIGNIN_SUCCESS, data: { data } },
      ];
      mockAxios.post.mockImplementationOnce(() => Promise.resolve({
        data,
      }));
      return store.dispatch(signInactions.userSignIn(user)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should create throw an error when an empty form is submitted', () => {
      const store = mockStore({ data: {}, errors: {}, user: {} });

      const expectedActions = [
        { type: apiCalls.API_CALL_START },
        { type: apiCalls.API_CALL_ERROR },
      ];
      // eslint-disable-next-line prefer-promise-reject-errors
      mockAxios.post.mockImplementationOnce(() => Promise.reject(
        { response: { data: errors } },
      ));

      const userdata = {
        email: '',
        password: '',
      };

      return store.dispatch(signInactions.userSignIn(userdata)).catch((error) => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(error).toEqual({ error: 'An error occured' });
      });
    });
  });
});

describe('test signInActions', () => {
  it("it should return 'SIGNIN_SUCCESS' and a data object", () => {
    // eslint-disable-next-line no-shadow
    const data = {};
    const result = signInactions.signInSuccess(data);
    expect(result).toEqual({
      type: signIn.SIGNIN_SUCCESS,
      data,
    });
  });

  it("it should return 'SIGNIN_FAILURE' and an error object ", () => {
    const error = {};
    const result = signInactions.signInFailure(error);
    expect(result).toEqual({
      type: signIn.SIGNIN_FAILURE,
      error,
    });
  });

  it("it should return 'API_CALL_ERROR' and an error object ", () => {
    const result = apiStatusActions.apiCallError();
    expect(result).toEqual({
      type: apiCalls.API_CALL_ERROR,
    });
  });
});
