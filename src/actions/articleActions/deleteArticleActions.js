import axios from 'axios';
import { toast } from 'react-toastify';
import { deleteArticle } from '../types';

const baseUrl = `${process.env.API_URL}/api/articles`;
const token = sessionStorage.getItem('token');

export const deleteArticleAction = slug => dispatch => axios.delete(
  `${baseUrl}/${slug}`,
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
        autoClose: 12000,
        hideProgressBar: false,
      });
    },
  )
  .catch(() => {

  });

export default deleteArticleAction;
