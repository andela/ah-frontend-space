import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { articleDetailActionTypes } from '../../../actions/types';
import articleDetailAction from '../../../actions/articleActions/articleDetailActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('articleDetailAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should get one article on success', () => {
    const store = mockStore({});
    const mockData = {
      results: [{ author: { username: 'testuser' }, created_at: 'some-date' }],
    };

    const expectedActions = {
      type: articleDetailActionTypes.GET_ONE_ARTICLE_SUCCESS,
      payload: mockData,
    };
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles/sebbs', {
      status: 200,
      response: mockData,

    });
    store.dispatch(articleDetailAction('sebbs')).then(() => {
      expect(store.articleDetailAction('sebbs')).toEqual(expectedActions);
    });
  });
  it('should return failure message', () => {
    const store = mockStore({});
    const mockData = {
      results: [{ author: { username: 'testuser' }, created_at: 'some-date' }],
    };

    const expectedActions = {
      type: articleDetailActionTypes.GET_ONE_ARTICLE_FAILURE,
      error: new Error('Request failed with status code 404'),
    };
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles/sebbs', {
      status: 404,
      response: mockData,

    });
    store.dispatch(articleDetailAction('sebbs')).then(() => {
      expect(store.articleDetailAction('sebbs')).toEqual(expectedActions);
    });
  });
});
