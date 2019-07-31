import React from 'react';
import { shallow } from 'enzyme';
import { Comment, mapStateToProps } from '../../../containers/comments/commentsContainer';

describe.only('<Comment />', () => {
  let wrapper;
  const props = {
    comment: {},
    fetchComments: jest.fn(),
    slug: 'drew',
  };
  beforeEach(() => {
    wrapper = shallow(<Comment {...props} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map the comments reducer to props', () => {
    const state = {
      comments: {
        comment: '',
      },
    };

    expect(mapStateToProps(state)).toEqual({
      comment: '',

    });
  });
});
