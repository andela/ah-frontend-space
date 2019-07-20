import axios from 'axios';
import { articleDetailActionTypes } from '../types';

const articleDetailAction = slug => dispatch => axios.get(`https://ah-haven-space.herokuapp.com/api/articles/${slug}`)
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
