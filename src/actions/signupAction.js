import axios from 'axios';
import { toast } from 'react-toastify';
import { REGISTER_USER, REGISTER_USER_SUCESS, REGISTER_USER_FAILURE } from './types';

export const registerUser = () => ({
  type: REGISTER_USER,
  payload: true,
});

export const registerUserSucess = response => ({
  type: REGISTER_USER_SUCESS,
  payload: { msg: response.data.user.msg },
});

export const registerUserfailure = error => ({
  type: REGISTER_USER_FAILURE,
  payload: { error: error.response.data.errors },
});

export const signupAction = newUser => (dispatch) => {
  dispatch(registerUser());
  return axios.post(
    'https://ah-haven-space.herokuapp.com/api/users/', newUser,
  ).then((response) => {
    dispatch(registerUserSucess(response));
    toast.success(`signup successful. ${response.data.user.msg}`, {
      autoClose: 12000,
      hideProgressBar: false,
    });
  }).catch((error) => {
    dispatch(registerUserfailure(error));
    for (const [keys, value] of Object.entries(error.response.data.errors)) {
      toast.error(value[0], {
        autoClose: 12000,
        hideProgressBar: false,
      });
    }
  });
};

export default signupAction;
