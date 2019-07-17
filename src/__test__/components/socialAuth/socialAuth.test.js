import React from 'react';
import { shallow } from 'enzyme';
import SocialAuth from '../../../components/socialAuth';

const props = {
  onSuccess: () => {},
  onFailure: () => {},
  faceBookResponse: () => {},
};
it('should match snapshot', () => {
  const wrapper = shallow(
    <SocialAuth
      {...props}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
