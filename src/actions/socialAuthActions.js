import axios from 'axios';
import { toast } from 'react-toastify';
import { actionTypes } from './types';

class SocialAuthActions {
    static googleSignup = accessToken => (dispatch) => {
      const data = {
        access_token: accessToken,
      };
      return axios.post('https://ah-haven-space.herokuapp.com/api/social-auth/google', data)
        .then(
          (resp) => {
            const { data: { user: { token } } } = resp;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('isLoggedIn', true);

            dispatch({
              type: actionTypes.GOOGLE_LOGIN_SUCCESS,
              payload: resp.data,
            });
            toast.success(`${resp.data.user.username}, You have been loggedin`, {
              autoclose: 8000,
              hideProgressBar: false,
            });
          }
          ,
        )
        .catch((error) => {
          dispatch({
            type: actionTypes.GOOGLE_FAILURE,
            error,
          });
        });
    };

    static facebookSignup = Token => (dispatch) => {
      const data = {
        access_token: Token,
      };

      return axios.post('https://ah-haven-space.herokuapp.com/api/social-auth/facebook', data)
        .then(
          (resp) => {
            const { data: { user: { token } } } = resp;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('isLoggedIn', true);

            dispatch({
              type: actionTypes.FACEBOOK_LOGIN_SUCCESS,
              payload: resp.data,
            });

            toast.success(`${resp.data.user.username}, You have been loggedin`, {
              autoclose: 8000,
              hideProgressBar: false,
            });
          }
          ,
        )
        .catch((error) => {
          dispatch({
            type: actionTypes.FACEBOOK_FAILURE,
            error,
          });
        });
    };
}

export default SocialAuthActions;
