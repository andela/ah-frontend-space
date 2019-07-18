import React from 'react';
import { shallow } from 'enzyme';
import Article, { Interest } from '../../components/HomePage/Article';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render interest', () => {
    const props = {
      klass: 'likes',
      alternative: 'likes',
      src: 'http://myimage.jpg',
      value: '5',
    };
    const wrapper = shallow(<Interest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render interest', () => {
    const props = {
      klass: 'dislikes',
      alternative: 'likes',
      src: 'http://myimage.jpg',
      value: '5',
    };
    const wrapper = shallow(<Interest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
