import React from 'react';
import { shallow } from 'enzyme';
import { toast } from 'react-toastify';
import { SocialAuthView } from '../../containers/SocialAuthView';

const props = {
  google: jest.fn(),
  facebook: jest.fn(),
  history: { push: jest.fn() },
};
const nextProps = {
  socialAuth: {
    isAuthenticated: true,
  },
};

describe('socialAuthView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SocialAuthView {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch google action on handleResponseGoogle ', () => {
    const response = {
      tokenObj: {
        id_token: 'sometoken',
      },
    };
    wrapper.instance().handleResponseGoogle(response);
    expect(wrapper.instance().props.google).toHaveBeenCalled();
    expect(wrapper.instance().props.google).toHaveBeenCalledWith('sometoken');
  });

  it('should dispatch facebook action on handleResponseFacebook', () => {
    const response = {
      tokenObj: {
        id_token: 'sometoken',
      },
    };
    wrapper.instance().handleResponseFacebook(response);
    expect(wrapper.instance().props.facebook).toHaveBeenCalled();
  });

  it('should display toast on google failure', () => {
    const response = {
      error: new Error('this is an error'),
    };
    jest.spyOn(toast, 'error');
    wrapper.instance().handleGoogleFailure(response);
    expect(wrapper.instance().props.google).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalled();
  });
  it('should redirect on successful login', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toHaveBeenCalledWith('/');
  });
  it('should redirect on successful login', () => {
    wrapper.setProps({ isAuthenticated: false });
    expect(props.history.push).not.toHaveBeenCalledWith('/');
  });
});
