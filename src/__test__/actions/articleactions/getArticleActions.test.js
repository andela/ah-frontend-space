import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { articleActionTypes } from '../../../actions/types';
import articleAction from '../../../actions/articleActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('articleAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should get all articles on success', () => {
    const store = mockStore({});
    const mockData = {
      article: { results: [{ author: { username: 'testuser' }, created_at: 'some-date' }] },
    };

    const expectedActions = [{
      type: articleActionTypes.GET_ALL_ARTICLE_SUCCESS,
      payload: mockData.article.results,
    }];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles', {
      status: 200,
      response: mockData,

    });
    store.dispatch(articleAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should return error message on failure', () => {
    const store = mockStore({});
    const mockData = {
      article: { results: [{ author: { username: 'testuser' }, created_at: 'some-date' }] },
    };

    const expectedActions = [{
      type: articleActionTypes.GET_ALL_ARTICLE_FAILURE,
      error: new Error('Request failed with status code 404'),
    }];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles', {
      status: 404,
      response: mockData,

    });
    store.dispatch(articleAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
