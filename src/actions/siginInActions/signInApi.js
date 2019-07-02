/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { handleResponse, handleError } from '../apiActions/apiUtils';

const baseUrl = `${process.env.API_URL}/api/users/login/`;

export function signIn(user) {
  return axios
    .post(baseUrl, {
      email: user.email,
      password: user.password,
    })
    .then(response => handleResponse(response))
    .catch(error => handleError(error));
}
