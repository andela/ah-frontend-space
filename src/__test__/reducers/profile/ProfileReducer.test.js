import profileReducer from '../../../reducers/profileReducer';


const initialstate = {
  profile: '',
};

const loadingInitialState = {
  loading: false,
};
const profile = {
  first_name: 'first',
  last_name: 'last',
};

let error;
let retrievedProfile;

describe('profileReducer', () => {
  it(('has initial state'), () => {
    const newState = profileReducer(initialstate, {});
    expect(newState).toEqual(initialstate);
  });

  it('should be able to load before every action is dispatched', () => {
    const newState = profileReducer(loadingInitialState, {
      type: 'STARTED',
    });
    expect(newState).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should return a profile to the user', () => {
    const newState = profileReducer(initialstate, {
      type: 'LOAD_PROFILE',
      retrievedProfile,
    });
    expect(newState).toEqual({
      loading: false,
      profile: '',
    });
  });

  it('should return an error on failure to retrieve profile ', () => {
    const newState = profileReducer(initialstate, {
      type: 'FAILED',
      loading: false,
      error,
    });
    expect(newState).toEqual({
      loading: false,
      ...initialstate,
      error,
    });
  });

  it('should be able to edit a profile successfully', () => {
    const newstate = profileReducer(initialstate, {
      type: 'EDIT_PROFILE',
      payload: profile,
      loading: false,
    });
    expect(newstate).toEqual({
      newData: profile,
      loading: false,
      profile: '',
    });
  });
});
