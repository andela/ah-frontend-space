import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../../components/HomePage/Tags';


describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Tag />);
    expect(wrapper).toMatchSnapshot();
  });
});
