import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/HomePage/Home';


describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
