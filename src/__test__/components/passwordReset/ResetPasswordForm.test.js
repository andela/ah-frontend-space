import React from 'react';
import { shallow } from 'enzyme';

import ResetPasswordForm from '../../../components/passwordReset/ResetPasswordForm';

function renderResetPasswordForm(args) {
  const defaultProps = {
    password1: '',
    password2: '',
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    loading: false,
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ResetPasswordForm {...props} />);
}

describe('ResetPasswordForm', () => {
  it('should match snapshot', () => {
    const wrapper = renderResetPasswordForm();
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const wrapper = renderResetPasswordForm({ loading: true });
    expect(wrapper).toMatchSnapshot();
  });
});
