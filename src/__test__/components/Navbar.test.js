import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../components/HomePage/Navbar';

function renderNavBar(args) {
  const defaultProps = {
    user: {
      isAuthenticated: true,
    },
    nextProps: {
      user: {
        isAuthenticated: true,
      },
      loggedIn: false,
    },
  };

  const props = { ...defaultProps, ...args };
  return shallow(<NavBar {...props} />);
}

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = renderNavBar();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call componentWillMount and set loggedIn to true', () => {
    const wrapper = renderNavBar();
    const wrapperInstance = wrapper.instance();
    jest.spyOn(wrapper, 'setState');
    sessionStorage.setItem('isLoggedIn', true);
    wrapperInstance.componentWillMount();
    expect(wrapperInstance.state.loggedIn).toBeTruthy();
    sessionStorage.removeItem('isloggedIn');
  });

  it('should setState to value of anthenticated', () => {
    const wrapper = renderNavBar();
    const nextProps = {
      user: {
        isAuthenticated: true,
      },
    };
    wrapper.setProps({ ...nextProps });
    console.log(wrapper.state().loggedIn);
    expect(wrapper.state().loggedIn).toBe(true);
  });
});
