import axios from 'axios';
import { toast } from 'react-toastify';
import { createArticleTypes } from '../types';

const createArticleAction = data => (dispatch) => {
  console.log(data);
  const token = sessionStorage.getItem('token');

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post('https://ah-haven-space.herokuapp.com/api/articles/', data, headers)
    .then(
      (resp) => {
        dispatch({
          type: createArticleTypes.CREATE_SUCCESS,
          payload: resp.data,
        });
        toast.success('you have successfully created an article');
      },
    )
    .catch((error) => {
      dispatch({
        type: createArticleTypes.CREATE_FAILURE,
        error,
      });
    });
};

export default createArticleAction;
