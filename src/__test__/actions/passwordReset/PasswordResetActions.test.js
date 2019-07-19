import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as resetPasswordActions from '../../../actions/passwordResetActions/passwordResetActions';
import { resetPassword, apiCalls } from '../../../actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('test the confirmEmail thunk', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the success action creator when an email is verified', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const mockrequest = moxios.requests.mostRecent();
      mockrequest.respondWith({
        status: 200,
      });
    });

    const expectedActions = [
      { type: apiCalls.API_CALL_START },
      { type: resetPassword.CONFIRM_EMAIL_SUCCESS },
    ];
    const user = {
      email: 'test@email.com',
    };
    return store.dispatch(resetPasswordActions.confirmEmail(user))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should call the failed action creators when email verificattion fails', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const mockrequest = moxios.requests.mostRecent();
      mockrequest.respondWith({
        status: 400,
        response: {
          data: {
            errors: [
              'An error occured',
            ],
          },
        },
      });
    });

    const expectedActions = [
      { type: apiCalls.API_CALL_START },
      { type: apiCalls.API_CALL_ERROR },
    ];
    const user = {
      email: '',
    };
    return store.dispatch(resetPasswordActions.confirmEmail(user))
      .catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('test the resetPasswordCall thunk', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the success action creator when valid passwords are supplied', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const mockrequest = moxios.requests.mostRecent();
      mockrequest.respondWith({
        status: 200,
      });
    });

    const expectedActions = [
      { type: apiCalls.API_CALL_START },
      { type: resetPassword.RESET_PASSWORD_SUCCESS },
    ];
    const resetData = {
      user: {
        passowrd1: 'Enter123',
        passowrd2: 'Enter123',
      },
      location: {
        search:
          '?uuid=YmVud2lsbDIwMTRAZ21haWwuY29t&token=586-46c49b955d04e07b8598',
      },
    };
    return store.dispatch(resetPasswordActions.resetPasswordCall(resetData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should call the resetPasswordCall with an error response ', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const mockrequest = moxios.requests.mostRecent();
      mockrequest.respondWith({
        status: 400,
        response: {
          data: {
            errors: [
              'An error occured',
            ],
          },
        },
      });
    });

    const resetData = {
      password1: '',
      password2: '',
    };

    const expectedActions = [
      { type: apiCalls.API_CALL_START },
    ];

    return store.dispatch(resetPasswordActions.resetPasswordCall(resetData))
      .catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('test signInActions', () => {
  it("it should return 'CONFIRM_EMAIL_SUCCESS' when called", () => {
    const result = resetPasswordActions.confirmEmailSuccess();
    expect(result).toEqual({
      type: resetPassword.CONFIRM_EMAIL_SUCCESS,
    });
  });

  it("it should return 'RESET_PASSWORD_SUCCESS' when called", () => {
    const result = resetPasswordActions.resetPasswordSuccess();
    expect(result).toEqual({
      type: resetPassword.RESET_PASSWORD_SUCCESS,
    });
  });

  it("it should return 'RESET_PASSWORD_FAILURE' when called", () => {
    const result = resetPasswordActions.resetPasswordFailure();
    expect(result).toEqual({
      type: resetPassword.RESET_PASSWORD_FAILURE,
    });
  });
});
