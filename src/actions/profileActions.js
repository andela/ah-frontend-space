/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { toast } from 'react-toastify';

export const getProfile = () => ({ type: 'STARTED' });

export const loadProfile = payload => ({ type: 'LOAD_PROFILE', payload });

export const failed = error => ({ type: 'FAILED', error });

export const editProfile = payload => ({ type: 'EDIT_PROFILE', payload });


export const fetchProfile = props => async (dispatch) => {
  sessionStorage.getItem('username');
  sessionStorage.getItem('token');
  return axios.get(
    `https://ah-haven-space.herokuapp.com/api/profiles/${
      sessionStorage.getItem('username')}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    },
  )
    .then((response) => {
      dispatch(loadProfile(response.data));
    })
    .catch((error) => {
      dispatch(failed(error.response.data));
      props.history.push('/login');
    });
};

export const editUserProfile = (profileInput, props) => async dispatch => axios.put(
  `https://ah-haven-space.herokuapp.com/api/profiles/${
    (sessionStorage.getItem('username'))
  }/edit`,
  profileInput, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  },
)
  .then((response) => {
    dispatch(editProfile(response.data.profile));
    toast.dismiss();
    toast.success('profile updated!', {
      position: toast.POSITION.CENTER_RIGHT,
      autoClose: 5000,
      onClose: props.history.push('/profile'),
    });
  })
  .catch((error) => {
    toast.error(`error! ${error}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      onClose: props.history.push('/login'),
    });
    dispatch(failed(error.response));
  });
