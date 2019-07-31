import axios from 'axios';

export const loading = () => ({ type: 'LOADING' });

export const loadComment = payload => ({ type: 'LOAD_COMMENT', payload });

export const failed = payload => ({ type: 'FAILED', payload });


export const getComments = slug => async dispatch => axios.get(
  `https://ah-haven-space.herokuapp.com/api/articles/${slug}/comments/`,
)
  .then(
    (res) => {
      dispatch(loadComment(res.data));
    },
  )
  .catch((error) => {
    dispatch(failed(error));
    console.log(error);
  });


export default getComments;
