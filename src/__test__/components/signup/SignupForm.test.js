import React from 'react';
import { shallow } from 'enzyme';

import { SignupForm, mapStateToProps } from '../../../containers/SignupForm';

describe('SignupForm',
  () => {
    let props;
    let wrapper;
    let instance;
    let nextProps;
    beforeEach(() => {
      props = {
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        handleSubmit: jest.fn(),
        signupAction: jest.fn(),
        isSigningUp: false,
        isValid: true,
        history: { push: jest.fn() },
      };
      nextProps = {
        signupReducer: {
          isValid: true,
        },
      };
      wrapper = shallow(<SignupForm {...props} />);
      instance = wrapper.instance();
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('reflect status when user inputs data', () => {
      wrapper.state({
        username: '',
      });
      const e = {
        target: {
          name: 'username',
          value: 'franc',
        },
      };
      wrapper.instance().changeHandler(e);

      expect(wrapper.state().username).toEqual('franc');
    });
    it('it should pass user data on form submission', () => {
      const e = {
        preventDefault: jest.fn(),

      };
      instance.handleSubmit(e);
      expect(props.signupAction).toHaveBeenCalledTimes(1);
    });
    it('should map redux state values to component props', () => {
      const state = {
        signupReducer: { isSigningUp: false },
      };
      expect(mapStateToProps(state)).toEqual({ isSigningUp: false });
    });
    it('should not redirect on failure to register a user', () => {
      wrapper.setProps({ isValid: false });
      expect(props.history.push).toBeCalledTimes(0);
    });
    it('should redirect on successful signup', () => {
      wrapper.setProps({ ...nextProps });
      expect(props.history.push).toBeCalledWith('/signin');
    });
  });
