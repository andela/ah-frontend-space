/* eslint-disable no-shadow */
/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import { shallow } from 'enzyme';
import {
  SignInPage,
  mapStateToProps,
  mapDispatchToProps,
} from '../../../containers/signIn/SignInPage';
import { user, errors } from '../../mock/data';

describe('render SignInPage with shallow', () => {
  const defaultProps = {
    user: { status: 200 },
    errors: {},
    actions: {
      userSignIn: user => new Promise((resolve, reject) => {
        if (user.status === 200) {
          resolve('Success Message');
        } else {
          reject('Not Successful');
        }
      }),
    },
    loading: false,
  };

  const wrapper = shallow(<SignInPage {...defaultProps} />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const state = {
      user: {
        email: 'email@email.com',
        password: 'enter123',
      },
      errors: {},
      loading: false,

    };
    expect(mapStateToProps(state)).toEqual({
      user: {
        email: 'email@email.com',
        password: 'enter123',
      },
      errors: {},
      loading: false,
    });
  });

  it('should map dispatch to the signInSuccess action and return a data object ', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).actions.signInSuccess(user);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SIGNIN_SUCCESS', data: user });
  });

  it('should map dispatch to the signInFailure action and return a errors object ', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).actions.signInFailure(errors);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SIGNIN_FAILURE', error: errors });
  });

  it('should return true if form is invalid ', () => {
    const wrapperInstance = wrapper.instance();
    expect(wrapperInstance.formIsInValid()).toEqual(true);
  });

  it('should return false if form is valid ', () => {
    wrapper.setState({
      user: {
        email: 'test@email.com',
        password: '1234Enter',
        status: 200,
      },
      errors: { onSave: false },
    });
    const wrapperInstance = wrapper.instance();
    expect(wrapperInstance.state.user.email).toBe('test@email.com');
    expect(wrapperInstance.formIsInValid()).toEqual(false);
  });

  it('should handle submit successfully', () => {
    wrapper.setState({
      user: {
        email: 'test@email.com',
        password: '1234Enter',
        status: 200,
      },
      errors: { onSave: false },
    });
    const wrapperInstance = wrapper.instance();
    const event = { preventDefault: jest.fn() };
    jest.spyOn(wrapperInstance, 'onSubmitHandler');
    wrapperInstance.onSubmitHandler(event);

    expect(wrapperInstance.onSubmitHandler).toBeCalled();
  });


  it('should handle onChange event', () => {
    wrapper.setState({
      target: {
        name: 'password',
        value: '1234Enter',
      },
      errors: { onSave: false },
    });
    const wrapperInstance = wrapper.instance();
    const event = {
      target: {
        name: 'password',
        value: '1234Enter',
      },
    };
    jest.spyOn(wrapperInstance, 'onChangeHandler');
    wrapperInstance.onChangeHandler(event);

    expect(wrapperInstance.onChangeHandler).toBeCalled();
  });
});
