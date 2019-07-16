import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps } from '../../../containers/profile/index';

describe.only('<Profile />', () => {
  let wrapper;
  const props = {
    fetchProfile: jest.fn(),
    profile: { profile: {} },
  };
  beforeEach(() => {
    wrapper = shallow(<Profile {...props} />);
  });
  it('should match the snapshot', () => {
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
