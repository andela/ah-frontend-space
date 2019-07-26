import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createArticleTypes } from '../../../actions/types';
import SocialAuthActions from '../../../actions/createArticleActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('tests for createArticleActions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch create success on successfull article creation', () => {
    const store = mockStore({});
    const data = {
      title: 'sebbss',
      body: 'this is a body',
      description: 'this is a descrition',
    };
    const mockData = {
      article: {
        title: 'sebbss',
        body: 'this is a body',
      },
    };
    const expectedActions = [
      {
        type: createArticleTypes.CREATE_SUCCESS,
        payload: mockData,
      },
    ];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles/', {
      status: 200,
      response: mockData,

    });
    store.dispatch(SocialAuthActions(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch failure on successfull login', () => {
    const store = mockStore({});
    const data = {
      title: 'sebbss',
      body: 'this is a body',
      description: 'this is a descrition',
    };
    const mockData = {
      article: { detail: 'Authentication credentials were not provided.' },
    };

    const expectedActions = [
      {
        type: createArticleTypes.CREATE_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles/', {
      status: 400,
      error: mockData,

    });
    store.dispatch(SocialAuthActions(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
