import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../components/common/Input';

function renderTextInput(args) {
  const defaultProps = {
    type: 'email',
    name: 'email',
    label: 'Email',
    onChange: jest.fn(),
    placeholder: '',
    value: '',
  };

  const props = { ...defaultProps, ...args };
  return shallow(<Input {...props} />);
}

describe('TextInput', () => {
  const wrapper = renderTextInput();

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a label', () => {
    expect(wrapper.find('label').text()).toBe('Email');
  });
});
