import axios from 'axios';
import { toast } from 'react-toastify';
import { deleteArticle } from '../types';

const token = sessionStorage.getItem('token');

export const deleteArticleAction = slug => dispatch => axios.delete(
  `https://ah-haven-space.herokuapp.com/api/articles/${slug}`,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  },
)
  .then(
    () => {
      dispatch({
        type: deleteArticle.DELETE_ARTICLE_SUCCESS,
      });
      toast.success('article deleted successfully', {
        autoClose: 3000,
        hideProgressBar: false,
      });
    },
  )
  .catch(() => {

  });

export default deleteArticleAction;
