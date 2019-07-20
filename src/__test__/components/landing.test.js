import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps } from '../../components/HomePage/Home';


const props = {
  getArticleActions: jest.fn(),
};

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should show loading when retriving articles', () => {
    const wrapper = shallow(<Home {...props} />);
    jest.spyOn(wrapper, 'setState');
    wrapper.instance().componentWillMount();
    expect(wrapper.state().loading).toBe(true);
  });
  it('should stop load after retriving articles', () => {
    const wrapper = shallow(<Home {...props} />);
    const nextProps = {
      articleState: {
        articles: [],
      },
    };
    wrapper.setProps({ ...nextProps });
    expect(wrapper.state().loading).toBe(false);
  });
  it('should map redux state values to component props', () => {
    const state = {
      articles: [],
    };
    expect(mapStateToProps(state)).toEqual({ articleState: [] });
  });
  it('should display articles', () => {
    const wrapper = shallow(<Home {...props} />);
    const nextProps = {
      articleState: {
        articles: [{ author: { username: 'testuser' }, created_at: 'some-date' }],
      },
    };
    wrapper.setProps({ ...nextProps });
    expect(wrapper.instance().state.articles.length).toEqual(1);
    expect(wrapper.find('.articles')).toHaveLength(1);
  });
  it('should display no articles message if no articles', () => {
    const wrapper = shallow(<Home {...props} />);
    const nextProps = {
      articleState: { articles: [] },
    };
    wrapper.setProps({ ...nextProps });
    expect(wrapper.find('.no__articles')).toHaveLength(1);
  });
});
