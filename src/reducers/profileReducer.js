const initialState = {
  loading: false,
  error: '',
  newData: '',
  profile: '',
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STARTED':
      return { ...state, loading: true };
    case 'LOAD_PROFILE':
      return ({
        ...state, ...action.payload, loading: false,
      });
    case 'EDIT_PROFILE':
      return ({
        ...state, loading: false, newData: action.payload,
      });
    case 'FAILED':
      return {
        ...state, loading: false, error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
