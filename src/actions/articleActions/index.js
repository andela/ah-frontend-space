import axios from 'axios';
import { articleActionTypes } from '../types';

const baseUrl = `${process.env.API_URL}/api/articles`;

const articleAction = () => dispatch => axios.get(baseUrl)
  .then(
    (resp) => {
      dispatch({
        type: articleActionTypes.GET_ALL_ARTICLE_SUCCESS,
        payload: resp.data.article.results,
      });
    }
    ,
  )
  .catch((error) => {
    dispatch({
      type: articleActionTypes.GET_ALL_ARTICLE_FAILURE,
      error,
    });
  });

export default articleAction;
