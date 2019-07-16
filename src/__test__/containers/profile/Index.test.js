import React from 'react';
import { shallow } from 'enzyme';
import ProfileComponent from '../../../components/profile/ProfileFetch';
import { mapStateToProps } from '../../../containers/profile/EditProfile';


describe('<ProfileComponet />', () => {
  let wrapper;
  const props = {
    state: {
      profile: {
        first_name: 'first',
        last_name: 'last',
      },
    },
    profile: { profile: {} },
  };
  it('it should render component without fail', () => {
    wrapper = shallow(<ProfileComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should map the profile reducer to props', () => {
    const state = {
      profile: {
        profile: {
          loading: false,
          error: '',
          newData: '',
          profile: '',
        },
      },
    };
    expect(mapStateToProps(state)).toEqual({
      profile: {
        profile: {
          loading: false,
          error: '',
          newData: '',
          profile: '',
        },
      },
    });
  });
});
