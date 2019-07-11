import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/HomePage/Footer';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
