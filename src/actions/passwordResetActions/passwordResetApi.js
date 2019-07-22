/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { handleResponse, handleError } from '../apiActions/apiUtils';

const confirmEmailURL = `${process.env.API_URL}/api/password_reset/`;

export async function confirmEmail(user) {
  try {
    const response = await axios
      .post(confirmEmailURL, {
        email: user.email.email,
      });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

export async function resetPassword(resetData) {
  try {
    const { user: { password1, password2 }, location } = resetData;
    const arr = location.search.slice(1).split('&');
    const uidb64 = arr[0].slice(5);
    const token = arr[1].slice(6);
    const resetPasswordURL = `${process.env.API_URL}/api/reset/${uidb64}/${token}`;
    const response = await axios
      .post(resetPasswordURL, {
        password1,
        password2,
      });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}
