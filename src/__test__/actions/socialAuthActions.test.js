import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionTypes } from '../../actions/types';
import SocialAuthActions from '../../actions/socialAuthActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('tests for socialAuthActions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch google success on successfull login', () => {
    const store = mockStore({});
    const accessToken = 'Token';
    const mockData = {
      user: {
        username: 'TestUser',
      },
    };
    const expectedActions = [
      {
        type: actionTypes.GOOGLE_LOGIN_SUCCESS,
        payload: mockData,
      },
    ];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/social-auth/google', {
      status: 200,
      response: mockData,

    });
    store.dispatch(SocialAuthActions.googleSignup(accessToken)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch google failure on fail login', () => {
    const store = mockStore({});
    const accessToken = 'Token';
    const mockData = {
      user: {
        detail: 'Social Authentication Failed, Token expired or invalid',
      },
    };
    const expectedActions = [
      {
        type: actionTypes.GOOGLE_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/social-auth/google', {
      status: 400,
      response: mockData,

    });
    store.dispatch(SocialAuthActions.googleSignup(accessToken)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch facebook success on successfull login', () => {
    const store = mockStore({});
    const accessToken = 'Token';
    const mockData = {
      user: {
        username: 'TestUser',
      },
    };
    const expectedActions = [
      {
        type: actionTypes.FACEBOOK_LOGIN_SUCCESS,
        payload: mockData,
      },
    ];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/social-auth/facebook', {
      status: 200,
      response: mockData,

    });
    store.dispatch(SocialAuthActions.facebookSignup(accessToken)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch facebook failure on failed login', () => {
    const store = mockStore({});
    const accessToken = 'Token';
    const mockData = {
      user: {
        detail: 'Social Authentication Failed, Token expired or invalid',
      },
    };
    const expectedActions = [
      {
        type: actionTypes.FACEBOOK_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/social-auth/facebook', {
      status: 400,
      response: mockData,

    });
    store.dispatch(SocialAuthActions.facebookSignup(accessToken)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
