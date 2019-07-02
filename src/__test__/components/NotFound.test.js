import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/notfound';

describe('Notfound', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
