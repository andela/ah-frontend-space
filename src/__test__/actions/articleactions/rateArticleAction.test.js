import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rateArticle } from '../../../actions/types';
import rateAction from '../../../actions/articleActions/rateArticleActions';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('rateAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should rate an article on success', () => {
    const store = mockStore({});
    const mockData = {
      article: { rating: 2 },
    };

    const expectedActions = [{
      type: rateArticle.RATE_ARTICLE_SUCCESS,
      payload: mockData,
    }];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles/sebbss/rate', {
      status: 200,
      response: mockData,

    });
    store.dispatch(rateAction('sebbss', 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch rate failure on failure to rate', () => {
    const store = mockStore({});
    const mockData = {
      article: {
        detail: 'not found',
      },
    };
    const expectedActions = [
      {
        type: rateArticle.RATE_ARTICLE_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles/sebbss/rate', {
      status: 400,
      response: mockData,

    });
    store.dispatch(rateAction('sebbss', 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
