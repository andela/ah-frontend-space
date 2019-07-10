import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/login';

describe('Login', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
