import axios from 'axios';
import { toast } from 'react-toastify';
import { rateArticle } from '../types';

const rateAction = (slug, rating) => (dispatch) => {
  const token = sessionStorage.getItem('token');
  const data = { rating };
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(`https://ah-haven-space.herokuapp.com/api/articles/${slug}/rate`, data, headers)
    .then(
      (resp) => {
        console.log(resp);
        dispatch({
          type: rateArticle.RATE_ARTICLE_SUCCESS,
          payload: resp.data,
        });
        toast.success('You have successfully rated this article', {
          autoclose: 5000,
          hideProgressBar: false,
        });
      }
      ,
    )
    .catch((error) => {
      dispatch({
        type: rateArticle.RATE_ARTICLE_FAILURE,
        error,
      });
    });
};
export default rateAction;
