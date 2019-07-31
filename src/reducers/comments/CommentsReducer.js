const initialState = {
  loading: false,
  comment: '',
  error: '',
};


const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STARTED':
      return {
        ...state,
        loading: true,
      };

    case 'FAILED':
      return {
        ...state,
        ...action.payload,
      };

    case 'LOAD_COMMENT':
      return ({
        ...state,
        ...action.payload,
      });

    default:
      return state;
  }
};


export default commentReducer;
