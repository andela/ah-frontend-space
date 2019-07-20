import axios from 'axios';
import { articleActionTypes } from '../types';


const articleAction = () => dispatch => axios.get('https://ah-haven-space.herokuapp.com/api/articles')
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
