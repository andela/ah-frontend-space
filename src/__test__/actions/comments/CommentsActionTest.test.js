import moxios from 'moxios';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getComments } from '../../../actions/comments/CommentsAction';


const middleWare = [thunk];
const mockStore = configureStore(middleWare);

describe('fetch comments', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should return a comment', () => {
    const dataToBeReturned = {
      comment: {
        comment_body: 'sleek',
        author: {
          username: 'nicks',
        },
      },
    };

    const Process = [
      {
        payload: dataToBeReturned,
        type: 'LOAD_COMMENT',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          response: dataToBeReturned,
        },
      );
    });
    const store = mockStore({});
    return store.dispatch(getComments())
      .then(() => {
        expect(store.getActions()).toEqual(Process);
      });
  });

  it('should be able to return an error on failure to fetch a comment', () => {
    const error = [{ Error: 'Request failed with status code 404' }];
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
          error,
          status: 404,
        },
      );
    });
    const store = mockStore({});
    return store.dispatch(getComments())
      .catch(() => {
        expect(store.getActions()).toEqual(Process);
      });
  });
});
