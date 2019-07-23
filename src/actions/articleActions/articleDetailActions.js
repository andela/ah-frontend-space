import axios from 'axios';
import { articleDetailActionTypes } from '../types';

const baseUrl = `${process.env.API_URL}/api/articles`;

const articleDetailAction = slug => dispatch => axios.get(`${baseUrl}/${slug}`)
  .then(
    (resp) => {
      dispatch({
        type: articleDetailActionTypes.GET_ONE_ARTICLE_SUCCESS,
        payload: resp.data.article,
      });
    }
    ,
  )
  .catch((error) => {
    dispatch({
      type: articleDetailActionTypes.GET_ONE_ARTICLE_FAILURE,
      error,
    });
  });

export default articleDetailAction;
