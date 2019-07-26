import React from 'react';
import { shallow } from 'enzyme';
import {
  Popup,
} from '../../utils/PopUp';

describe('render PopUp with shallow', () => {
  const slug = 'slug';
  const defaultProps = {
    slug,
    closePopup: jest.fn(),
    actions: {
      deleteArticleAction: () => new Promise((resolve) => {
        resolve('Success Message');
      }),
    },
    loading: false,
  };

  const wrapper = shallow(<Popup {...defaultProps} />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should perform onClick to delete article', () => {
    const wrapperInstance = wrapper.instance();
    wrapperInstance.deleteArticle();
  });
});
