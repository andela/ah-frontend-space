import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from '../../../components/signIn/SignInForm';

function renderSignInForm(args) {
  const defaultProps = {
    email: '',
    password: '',
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    loading: false,
    errors: {
      email: 'Invalid Email',
      password: 'Invalid Password',
      onSave: true,
    },
  };

  const props = { ...defaultProps, ...args };
  return shallow(<SignInForm {...props} />);
}

describe('SignInForm', () => {
  it('should match snapshot', () => {
    const wrapper = renderSignInForm();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders form and 'Sign In' text on button when loading is false", () => {
    const wrapper = renderSignInForm();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('renders a loader text on the button when loading is true', () => {
    const wrapper = renderSignInForm({ loading: true });
    expect(wrapper.find('.loading').length).toEqual(1);
  });
});
