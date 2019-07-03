import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';


describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Welcome to Authors Haven');
  });
});
