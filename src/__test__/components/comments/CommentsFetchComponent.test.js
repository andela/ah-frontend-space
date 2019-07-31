import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../../../components/HomePage/CommentsComponent';


describe('<Comments />', () => {
  const props = {
    comment: {
      comment_body: 'sleek',
      author: {
        username: 'nicks',
      },
    },
  };

  it('it should render component without fail', () => {
    const wrapper = shallow(<Comments {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
