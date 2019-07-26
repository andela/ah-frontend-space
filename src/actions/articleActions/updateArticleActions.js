/* eslint-disable func-names */
import { toast } from 'react-toastify';
import { updateArticle } from '../types';
import * as updateArticleApi from './updateArticleApi';
import * as apiCallStatus from '../apiActions/apiStatusActions';

export function updateArticleSuccess(article) {
  return { type: updateArticle.UPDATE_ARTICLE_SUCCESS, article };
}

export function updateArticleFailure(error) {
  return { type: updateArticle.UPDATE_ARTICLE_FAILURE, error };
}


export function updateArticleData(articleData) {
  toast.dismiss();
  return function (dispatch) {
    dispatch(apiCallStatus.apiCallStart());
    return updateArticleApi
      .updateArticle(articleData)
      .then((data) => {
        dispatch(updateArticleSuccess(data));
        return data.data;
      })
      .catch((error) => {
        const errors = { ...error.response.data };
        dispatch(apiCallStatus.apiCallError());
        dispatch(updateArticleFailure(error.response.data));
        toast.error(errors.article.detail, {
          autoClose: 4000,
        });
      });
  };
}
