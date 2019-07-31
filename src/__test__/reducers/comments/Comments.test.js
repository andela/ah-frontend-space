import commentsReducer from '../../../reducers/comments/CommentsReducer';


const initialstate = {
  comment: '',
};

const loadingInitialState = {
  loading: false,
};
const comment = {
  comment_body: 'first',
  author: { username: 'nicks' },
};

let error;
let retrievedComment;

describe('commentsReducer', () => {
  it(('has initial state'), () => {
    const newState = commentsReducer(initialstate, {});
    expect(newState).toEqual(initialstate);
  });

  it('should be able to load before every action is dispatched', () => {
    const newState = commentsReducer(loadingInitialState, {
      type: 'STARTED',
    });
    expect(newState).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should return a profile to the user', () => {
    const newState = commentsReducer(initialstate, {
      type: 'LOAD_COMMENT',
      retrievedComment,
    });
    expect(newState).toEqual({
      comment: '',
    });
  });

  it('should return an error on failure to retrieve profile ', () => {
    const newState = commentsReducer(initialstate, {
      type: 'FAILED',
      loading: false,
      error,
    });
    expect(newState).toEqual({
      ...initialstate,
      error,
    });
  });
});
