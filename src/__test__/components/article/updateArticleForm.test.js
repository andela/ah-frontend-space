import React from 'react';
import { shallow } from 'enzyme';
import UpdateArticleForm from '../../../components/article/UpdateArticleForm';

function renderUpdateAricleForm(args) {
  const defaultProps = {
    title: '',
    description: '',
    body: '',
    loading: false,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };
  const props = { ...defaultProps, ...args };
  return shallow(<UpdateArticleForm {...props} />);
}

describe('UpdateArticleForm', () => {
  it('should match snapshot when loading is false', () => {
    const wrapper = renderUpdateAricleForm();
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshop when loading is true', () => {
    const wrapper = renderUpdateAricleForm({ loading: true });
    expect(wrapper).toMatchSnapshot();
  });
});
