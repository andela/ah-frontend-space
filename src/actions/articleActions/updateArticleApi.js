/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { handleResponse, handleError } from '../apiActions/apiUtils';

const baseUrl = `${process.env.API_URL}/api/articles/`;

export function updateArticle(articleData) {
  const {
    title, description, body, slug, image,
  } = articleData;
  const article = {
    title,
    description,
    body,
    image,
  };
  const token = sessionStorage.getItem('token');
  const url = baseUrl + slug;
  return axios
    .patch(url,
      article,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    .then(response => handleResponse(response))
    .catch(error => handleError(error));
}
