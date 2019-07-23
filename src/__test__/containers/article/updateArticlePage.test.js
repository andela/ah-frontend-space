import React from 'react';
import { shallow } from 'enzyme';
import {
  UpdateArticlePage,
  mapStateToProps,
  mapDispatchToProps,
} from '../../../containers/article/UpdateArticlePage';

function renderUpdateArticlePage(args) {
  const defaultProps = {
    actions: {
      updateArticleData: () => new Promise((resolve) => {
        resolve({ article: { slug: 'u' } });
      }),
    },
    match: { params: 'this-is-a-slug' },
    loading: false,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    location: { state: { article: {} } },
  };
  const props = { ...defaultProps, ...args };
  return shallow(<UpdateArticlePage {...props} />);
}

describe('UpdateArticlePage', () => {
  it('should match snapshot', () => {
    const wrapper = renderUpdateArticlePage();
    wrapper.setState({
      article: {
        title: '',
        description: '',
        body: '',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const state = {
      data: {
        title: 'this is a title',
        description: 'and a description',
        body: 'and finally a body',
      },
      loading: false,
    };
    expect(mapStateToProps(state)).toEqual({
      data: {
        title: 'this is a title',
        description: 'and a description',
        body: 'and finally a body',
      },
      loading: false,
    });
  });

  it('should dispatch update actions', () => {
    const article = {
      title: 'this is a title',
      description: 'and a description',
      body: 'and finally a body',
    };
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).actions.updateArticleSuccess(article);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UPDATE_ARTICLE_SUCCESS', article });
  });

  it('should handle the submit event', () => {
    const wrapper = renderUpdateArticlePage();
    wrapper.setState({
      article: {
        title: 'this is a title',
        description: 'and a description',
        body: 'and finally a body',
        image: '',
      },
    });
    const wrapperInstance = wrapper.instance();
    const event = { preventDefault: jest.fn() };
    jest.spyOn(wrapperInstance, 'onSubmitHandler');

    wrapperInstance.onSubmitHandler(event);

    expect(wrapperInstance.onSubmitHandler).toBeCalled();
  });

  it('should handle the onChange event', () => {
    const wrapper = renderUpdateArticlePage();
    wrapper.setState({
      target: {
        name: 'title',
        value: 'this is a new title',
      },
    });
    const wrapperInstance = wrapper.instance();
    const event = {
      target: {
        name: 'title',
        value: 'this is a new title',
      },
    };
    jest.spyOn(wrapperInstance, 'onChangeHandler');
    wrapperInstance.onChangeHandler(event);
    expect(wrapperInstance.onChangeHandler).toBeCalled();
  });
});
