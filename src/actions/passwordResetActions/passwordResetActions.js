/* eslint-disable func-names */
import { toast } from 'react-toastify';
import { resetPassword } from '../types';
import * as passwordResetApi from './passwordResetApi';
import * as apiCallStatus from '../apiActions/apiStatusActions';

export function confirmEmailSuccess() {
  return { type: resetPassword.CONFIRM_EMAIL_SUCCESS };
}

export function resetPasswordSuccess() {
  return { type: resetPassword.RESET_PASSWORD_SUCCESS };
}

export function resetPasswordFailure() {
  return { type: resetPassword.RESET_PASSWORD_FAILURE };
}

export function confirmEmail(user) {
  toast.dismiss();
  const successMessage = `Successfully Verified! A password reset link has been sent to ${user.email.email}`;
  return function (dispatch) {
    dispatch(apiCallStatus.apiCallStart());
    return passwordResetApi
      .confirmEmail(user)
      .then(() => {
        dispatch(confirmEmailSuccess());
        toast.success(successMessage, {
          autoClose: 12000,
        });
      })
      .catch((error) => {
        dispatch(apiCallStatus.apiCallError(error.response.data.errors));
        toast.error(`Verification Failed! The email ${error.response.data.errors.email[0]}`);
      });
  };
}

export function resetPasswordCall(resetData) {
  toast.dismiss();
  const successMessage = 'Password was successfully reset. You can now sign in to your account.';
  return function (dispatch) {
    dispatch(apiCallStatus.apiCallStart());
    return passwordResetApi
      .resetPassword(resetData)
      .then(() => {
        dispatch(resetPasswordSuccess());
        toast.success(successMessage, {
          autoClose: 12000,
        });
      })
      .catch((error) => {
        dispatch(apiCallStatus.apiCallError(error.response.data.errors));
        toast.error(`${error.response.data.errors.email[0]}`);
      });
  };
}
