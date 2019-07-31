import axios from 'axios';
import { articleDetailActionTypes } from '../types';

const articleDetailAction = slug => (dispatch) => {
  const token = sessionStorage.getItem('token');
  /* istanbul ignore next */
  if (token) {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return axios.get(`https://ah-haven-space.herokuapp.com/api/articles/${slug}`, headers)
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
  }
  return axios.get(`https://ah-haven-space.herokuapp.com/api/articles/${slug}`)
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
};
export default articleDetailAction;
