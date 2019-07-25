import moxios from 'moxios';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchProfile, editUserProfile } from '../../../actions/profileActions';


const middleWare = [thunk];
const mockStore = configureStore(middleWare);

describe('fetch profile', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should be able to fetch profile', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    const dataReturned = {
      profile: {
        first_name: 'first',
        last_name: 'last',
        image: 'https://firebasestorage.googleapis.com/v0/b/ah-frontend-invictus.appspot.com/o/images%2FPhotoGrid_1549744503436%20(1).jpg?alt=media&token=15234b51-ca88-488e-8bc3-494d6e717ac8',
        bio: 'am so cool',
        following: false,
      },
    };

    const Process = [
      {
        payload: dataReturned,
        type: 'LOAD_PROFILE',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          response: dataReturned,
        },
      );
    });
    const store = mockStore({});
    return store.dispatch(fetchProfile(props))
      .then(() => {
        expect(store.getActions()).toEqual(Process);
      });
  });

  it('should be able to return an error on failure to fetch profile', () => {
    const error = { detail: 'un authorised access' };
    const props = {
      history: {
        push: jest.fn(),
      },
    };


    const Process = [
      {
        error,
        type: 'FAILED',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          response: error,
          status: 403,
        },
      );
    });
    const store = mockStore({});
    return store.dispatch(fetchProfile(props))
      .then(() => {
        expect(store.getActions()).toEqual(Process);
      });
  });


  it('should be able to edit a profile', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    const dataPushed = {
      profile: {
        first_name: 'first',
        last_name: 'last',
        date_of_birth: '1997/20/02',
      },
    };
    const dataReturned = {
      profile: {
        first_name: 'first',
        last_name: 'last',
        image: 'https://firebasestorage.googleapis.com/v0/b/ah-frontend-invictus.appspot.com/o/images%2FPhotoGrid_1549744503436%20(1).jpg?alt=media&token=15234b51-ca88-488e-8bc3-494d6e717ac8',
        bio: 'am so cool',
        following: false,
        date_of_birth: '1997/20/02',
      },
    };

    const Process = [
      {
        payload: dataReturned.profile,
        type: 'EDIT_PROFILE',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          response: dataReturned,
          status: 200,
        },
      );
    });
    const store = mockStore({});
    return store
      .dispatch(editUserProfile(dataPushed, props))
      .then(() => {
        expect(store.getActions()).toEqual(Process);
      });
  });

  it('should be able to return an error on failure to edit profile', () => {
    const error = { data: { data: 'un authorised access' } };
    const dataPushed = {
      profile: {
        date_of_birth: '1997/20/',
      },
    };

    const props = {
      history: {
        push: jest.fn(),
      },
    };


    const Process = [
      {
        type: 'FAILED',
        error,
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          status: 400,
          response: error,
        },
      );
    });
    const store = mockStore({});
    return store.dispatch(editUserProfile(dataPushed, props))
      .catch(() => {
        expect(store.getActions()).toEqual(Process);
      });
  });
});
