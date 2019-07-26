import React from 'react';
import { shallow } from 'enzyme';
import { CreateArticleView } from '../../../containers/createArticleView';

const props = {
  onChangeHandlerArticle: jest.fn(),
  onSubmitHandler: jest.fn(),
  createArticles: jest.fn(),
  isValid: false,
  history: { push: jest.fn() },
  payload: { article: { title: 'test' } },
};
const nextProps = {
  isValid: true,
};

describe('createArticleView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreateArticleView {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change state as user inputs data', () => {
    const e = {
      target: {
        name: 'title',
        value: 'sebbss',
      },
    };
    wrapper.instance().onChangeHandlerArticle(e);
    expect(wrapper.instance().state.article.title).toEqual('sebbss');
  });

  it('should create an article on submission', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().onSubmitHandler(e);
    expect(props.createArticles).toHaveBeenCalledTimes(1);
  });

  it('should redirect on successful article creation', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalled();
  });

  it('should redirect on successful article creation', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalled();
  });

  it('should not redirect on article creation failure', () => {
    wrapper.setProps({ isValid: false });
    expect(props.history.push).not.toBeCalled();
  });
});
