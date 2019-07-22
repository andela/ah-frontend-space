import React from 'react';
import { shallow } from 'enzyme';

import {
  ResetPasswordPage,
  mapStateToProps,
  mapDispatchToProps,
} from '../../../containers/passwordReset/ResetPasswordPage';

function renderResetPasswordPage(args) {
  const defaultProps = {
    user: {
      password1: '',
      password2: '',
    },
    loading: false,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ResetPasswordPage {...props} />);
}

describe('ResetPasswordPage', () => {
  it('should match snapshot', () => {
    const wrapper = renderResetPasswordPage();
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const state = {
      user: {
        password1: '',
        password2: '',
      },
    };
    expect(mapStateToProps(state)).toEqual({
      user: {
        password1: '',
        password2: '',
      },
      loading: false,
    });
  });

  it('should map dispatch to the resetPasswordSuccess action', () => {
    const user = {
      password1: '',
      password2: '',
    };
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).actions.resetPasswordSuccess(user);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'RESET_PASSWORD_SUCCESS' });
  });

  it('should handle submit successfully', () => {
    const wrapper = renderResetPasswordPage();
    wrapper.setState({
      user: {
        password1: '',
        password2: '',
      },
    });
    // const resetData = wrapper.state.user;
    wrapper.setProps({
      actions: {
        resetPasswordCall: () => new Promise((resolve) => {
          resolve('Success Message');
        }),
      },
    });
    const wrapperInstance = wrapper.instance();
    const event = { preventDefault: jest.fn() };
    jest.spyOn(wrapperInstance, 'onSubmitHandler');
    wrapperInstance.onSubmitHandler(event);

    expect(wrapperInstance.onSubmitHandler).toBeCalled();
  });

  it('should handle onChange event', () => {
    const wrapper = renderResetPasswordPage();
    wrapper.setState({
      target: {
        name: 'password1',
        value: 'Enter123',
      },
    });
    const wrapperInstance = wrapper.instance();
    const event = {
      target: {
        name: 'password1',
        value: 'Enter123',
      },
    };
    jest.spyOn(wrapperInstance, 'onChangeHandler');
    wrapperInstance.onChangeHandler(event);

    expect(wrapperInstance.onChangeHandler).toBeCalled();
  });

  it('should return true if form is valid ', () => {
    const wrapper = renderResetPasswordPage();
    wrapper.setState({
      user: {
        password1: 'Enter123',
        password2: 'Enter123',
      },
    });
    const wrapperInstance = wrapper.instance();
    expect(wrapperInstance.formIsValid()).toEqual(true);
  });

  it('should return false if form is invalid ', () => {
    const wrapper = renderResetPasswordPage();
    wrapper.setState({
      user: {
        password1: 'Enter123',
        password2: 'Enter',
      },
    });
    const wrapperInstance = wrapper.instance();
    expect(wrapperInstance.formIsValid()).toEqual(false);
  });
});
