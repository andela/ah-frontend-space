/* eslint-disable func-names */
import { signIn } from '../types';
import * as signInApi from './signInApi';
import * as apiCallStatus from '../apiActions/apiStatusActions';


export function signInSuccess(data) {
  return { type: signIn.SIGNIN_SUCCESS, data };
}

export function signInFailure(error) {
  return { type: signIn.SIGNIN_FAILURE, error };
}

export function userSignIn(user) {
  return function (dispatch) {
    dispatch(apiCallStatus.apiCallStart());
    return signInApi
      .signIn(user)
      .then((data) => {
        const isLoggedIn = true;
        sessionStorage.setItem('data', data);
        sessionStorage.setItem('isLoggedIn', isLoggedIn);
        dispatch(signInSuccess(data));
      })
      .catch((error) => {
        dispatch(apiCallStatus.apiCallError(error.response.data.errors));
        throw error.response.data.errors;
      });
  };
}
