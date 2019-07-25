import React from 'react';
import { shallow } from 'enzyme';
import ProfileEditComponent from '../../../components/profile/ProfileEdit';
import ProfileComponent from '../../../components/profile/ProfileFetch';


describe('<ProfileComponet />', () => {
  let wrapper;
  const props = {
    state: {
      profile: {
        firstName: 'first',
        lastName: 'last',
      },
    },
    profile: { profile: {} },
  };
  it('it should render component without fail', () => {
    wrapper = shallow(<ProfileEditComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render component without fail', () => {
    wrapper = shallow(<ProfileComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
