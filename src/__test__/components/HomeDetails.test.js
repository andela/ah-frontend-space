import React from 'react';
import { shallow } from 'enzyme';
import { ArticleDetails } from '../../components/HomePage/HomeDetail';


const props = {
  getArticleActions: jest.fn(),
  match: { params: { slug: 'test' } },
};

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ArticleDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should show loading when retriving an article', () => {
    const wrapper = shallow(<ArticleDetails {...props} />);
    jest.spyOn(wrapper, 'setState');
    wrapper.instance().componentWillMount();
    expect(wrapper.state().loading).toBe(true);
  });
  it('should stop load after retriving an article', () => {
    const wrapper = shallow(<ArticleDetails {...props} />);
    const nextProps = {
      articleState: {
        articles: [],
      },
    };
    wrapper.setProps({ ...nextProps });
    expect(wrapper.state().loading).toBe(false);
  });
});
