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
    actions1: { deleteArticleAction: jest.fn() },
    loading: false,
  };

  const wrapper = shallow(<Popup {...defaultProps} />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should delete article', () => {
    const wrapperInstance = wrapper.instance();
    jest.spyOn(wrapper, 'setState');
    wrapperInstance.deleteArticle();
    expect(wrapper.state().deleted).toBe(true);
  });
});
