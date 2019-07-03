import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';


describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h1').text()).toBe('Welcome to Authors Haven');
  });
});
