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
        sessionStorage.setItem('email', data.data.user.email);
        sessionStorage.setItem('username', data.data.user.username);
        sessionStorage.setItem('token', data.data.user.auth_token);
        sessionStorage.setItem('isLoggedIn', isLoggedIn);
        sessionStorage.setItem('token', data.data.user.auth_token);
        dispatch(signInSuccess(data));
      })
      .catch((error) => {
        dispatch(apiCallStatus.apiCallError(error.response.data.errors));
        throw error.response.data.errors;
      });
  };
}
