import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as updateActions from '../../../actions/articleActions/updateArticleActions';
import { updateArticle, apiCalls } from '../../../actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('test the updateArticleData thunk', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the success action creator when an article is updated', () => {
    const store = mockStore({});
    const article = {
      title: 'test article title',
      description: 'test article description',
      body: 'test article body',
    };
    const articleData = {
      article,
      slug: 'test-article-body',
    };
    moxios.wait(() => {
      const mockRequest = moxios.requests.mostRecent();
      mockRequest.respondWith({
        status: 200,
        response: articleData,
      });
    });

    return store.dispatch(updateActions.updateArticleData(articleData))
      .then(() => {
        expect(store.getActions()[0].type).toEqual('API_CALL_START');
        expect(store.getActions()[1].type).toEqual('UPDATE_ARTICLE_SUCCESS');
      });
  });

  it('should call the failure action creator when an article is updated', () => {
    const store = mockStore({ data: {}, error: {} });
    const error = { error: 'An error occured' };
    const articleData = {
      article: {
        title: 'title',
        description: 'description',

      },
      slug: 'test-article-body',
    };
    moxios.wait(() => {
      const mockRequest = moxios.requests.mostRecent();
      mockRequest.respondWith({
        status: 400,
        response: {
          error: 'An error occured',
        },
      });
    });

    const expectedActions = [
      { type: apiCalls.API_CALL_START },
      { type: apiCalls.API_CALL_ERROR },
      { type: updateArticle.UPDATE_ARTICLE_FAILURE, error },
    ];
    sessionStorage.setItem('token', 'erfsvcsdfvdfvsdfv.sdfvsdfvdsvdfs');
    return store.dispatch(updateActions.updateArticleData(articleData))
      .catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('test update actions', () => {
  it('shout return "UPDATE_ARTICLE_SUCCESS" when called', () => {
    const article = {
      title: 'test article title',
      description: 'test article description',
      body: 'test article body',
    };
    const result = updateActions.updateArticleSuccess(article);
    expect(result).toEqual({
      type: updateArticle.UPDATE_ARTICLE_SUCCESS,
      article,
    });
  });

  it('should return "UPDATE_ARTICLE_FAILURE" when called', () => {
    const error = {
      message: 'An error occured',
    };
    const result = updateActions.updateArticleFailure(error);
    expect(result).toEqual({
      type: updateArticle.UPDATE_ARTICLE_FAILURE,
      error,
    });
  });
});
