import moxios from 'moxios';
import { updateArticle } from '../../../actions/articleActions/updateArticleApi';

describe('test the api call for updating an article', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the updateArticle method successfully', () => {
    moxios.wait(() => {
      const mockRequest = moxios.requests.mostRecent();
      mockRequest.respondWith({
        status: 200,
        article: {
          message: 'success',
        },
      });
    });
    const articleData = {
      article: {
        title: 'test article title',
        description: 'test article description',
        body: 'test article body',
      },
      slug: 'this-is-a-slug',
    };
    return updateArticle(articleData).then((response) => {
      expect(response.status).toEqual(200);
    });
  });

  it('should return an error response when updateArticle is called', () => {
    moxios.wait(() => {
      const mockRequest = moxios.requests.mostRecent();
      mockRequest.respondWith({
        status: 400,
        error: {
          message: 'An error occured',
        },
      });
      const articleData = {
        article: {
          title: 'test article title',
          description: 'test article description',
          body: 'test article body',
        },
      };
      return updateArticle(articleData.article).catch((error) => {
        expect(error.status).toEqual(123);
      });
    });
  });
});
