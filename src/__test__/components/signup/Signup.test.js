import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../../components/common/Input';

describe('Input', () => {
  const props = {
    type: '',
    name: '',
    id: '',
    placeholder: '',
    value: '',
  };
  it('should match snapshot', () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
