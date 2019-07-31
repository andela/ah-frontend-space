import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { deleteArticle } from '../../../actions/types';
import deleteArticleAction from '../../../actions/articleActions/deleteArticleActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('test delete article actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should delete an article', () => {
    const store = mockStore({});
    const expectedActions = [{
      type: deleteArticle.DELETE_ARTICLE_SUCCESS,
    }];
    moxios.stubRequest('https://ah-haven-space.herokuapp.com/api/articles/slug', {
      status: 200,

    });
    store.dispatch(deleteArticleAction('slug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
