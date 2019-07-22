import React from 'react';
import { shallow } from 'enzyme';

import {
  ConfirmEmailPage,
  mapStateToProps,
  mapDispatchToProps,
} from '../../../containers/passwordReset/ConfirmEmailPage';

function renderConfirmEmailPage(args) {
  const defaultProps = {
    loading: false,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    actions: {},
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ConfirmEmailPage {...props} />);
}

describe('ConfirmEmailPage', () => {
  it('should match snapshot', () => {
    const wrapper = renderConfirmEmailPage();
    wrapper.setState({
      user: {
        email: 'test@email.com',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const state = {
      user: {
        email: 'email@email.com',
      },
    };
    expect(mapStateToProps(state)).toEqual({
      user: {
        email: 'email@email.com',
      },
      loading: false,
    });
  });

  it('should map dispatch to the confirmEmail action', () => {
    const user = {
      email: 'email@email.com',
    };
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).actions.confirmEmailSuccess(user);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'CONFIRM_EMAIL_SUCCESS' });
  });

  it('should handle submit successfully', () => {
    const wrapper = renderConfirmEmailPage();
    wrapper.setState({
      user: {
        email: 'test@email.com',
      },
    });
    wrapper.setProps({
      actions: { confirmEmail: jest.fn() },
    });
    const wrapperInstance = wrapper.instance();
    const event = { preventDefault: jest.fn() };
    jest.spyOn(wrapperInstance, 'onSubmitHandler');
    wrapperInstance.onSubmitHandler(event);

    expect(wrapperInstance.onSubmitHandler).toBeCalled();
  });

  it('should handle onChange event', () => {
    const wrapper = renderConfirmEmailPage();
    wrapper.setState({
      target: {
        name: 'email',
        value: 'test@email.com',
      },
    });
    const wrapperInstance = wrapper.instance();
    const event = {
      target: {
        name: 'email',
        value: 'test@email.com',
      },
    };
    jest.spyOn(wrapperInstance, 'onChangeHandler');
    wrapperInstance.onChangeHandler(event);

    expect(wrapperInstance.onChangeHandler).toBeCalled();
  });
});
