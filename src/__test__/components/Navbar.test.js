import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../components/HomePage/Navbar';


describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
