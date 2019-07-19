import React from 'react';
import { shallow } from 'enzyme';

import ConfirmEmailForm from '../../../components/passwordReset/ConfirmEmailForm';

function renderConfirmEmailForm(args) {
  const defaultProps = {
    email: '',
    loading: false,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    value: 'email@email.com',
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ConfirmEmailForm {...props} />);
}

describe('ConfirmEmailForm', () => {
  it('should match snapshot', () => {
    const wrapper = renderConfirmEmailForm();
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const wrapper = renderConfirmEmailForm({ loading: true });
    expect(wrapper).toMatchSnapshot();
  });
});
