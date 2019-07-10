import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import signupAction from '../../../actions/signupAction';
import { REGISTER_USER, REGISTER_USER_SUCESS, REGISTER_USER_FAILURE } from '../../../actions/types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Signup Action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should register successfully', () => {
    const store = mockStore({});
    const payload = {
      msg: 'Please check your email to verify your account verification has been sent to okirorfrankj578rr@gmail.com',
    };
    moxios.wait(() => {
      const requestMock = moxios.requests.mostRecent();
      requestMock.respondWith({
        status: 201,
        response: { user: payload },
      });
    });

    const expectedAction = [
      {
        type: REGISTER_USER,
        payload: true,
      },
      {
        type: REGISTER_USER_SUCESS,
        payload,
      },
    ];
    const validData = {
      username: 'ufrancfggggdkkrggrh',
      email: 'eokirorfrankj578rr@gmail.com',
      password: 'Security@1993@',
      confirmPassword: 'Security@1993@',
    };
    return store
      .dispatch(signupAction(validData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
  it('returns error message on signup failure', () => {
    const store = mockStore({});
    const payload = {
      errors: {
        username: [
          'This field may not be blank.',
        ],
      },
    };
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 400,
        response: payload,
      });
    });
    const expectedAction = [
      { type: REGISTER_USER, payload: true },
      { type: REGISTER_USER_FAILURE, payload: { error: payload.errors } }];
    const invalidData = {
      username: '',
      email: 'okirorfrank37@gmail.com',
      password: 'Security1993@',
      confirmPassword: 'Security1993@',
    };
    return store.dispatch(signupAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
