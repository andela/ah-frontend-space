import React from 'react';
import { shallow } from 'enzyme';
import { ProfileIsEdited, mapStateToProps } from '../../../containers/profile/EditProfile';


describe('ProfileIsEdited', () => {
  let wrapper;
  const props = {
    profileIsEdited: jest.fn(),
    profile: {
      profile: {
        bio: 'cool',
        firstName: 'first_name',
      },
    },

    fetchProfile: jest.fn(),
    editUserProfile: jest.fn(),
    componentWillReceiveProps: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<ProfileIsEdited {...props} />);
  });
  it('renders without fail', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('it should map state to props', () => {
    const initialState = {
      profile: '',
    };
    expect(mapStateToProps(initialState)).toEqual({
      profile: '',
    });
  });

  it('should detect change in state and dispatch the required action', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'first_name',
        value: 'first',
      },
    };
    const wrapperInst = wrapper.instance();
    wrapperInst.handleChange(event);
    wrapperInst.handleSubmit(event);
    expect(wrapperInst.state.first_name).toBe('first');
  });

  it('should set new state for props', () => {
    const nextProps = {
      profile: {
        profile: {
          username: 'bxbhdhhsaj',
          first_name: 'firstname',
          last_name: 'last',
          bio: 'bio',
          image: 'http//',
          date_of_birth: '2001-02-02',
        },
      },

    };
    wrapper.setProps({ ...nextProps });
    expect(nextProps.profile.profile.first_name).toEqual('firstname');
  });
});
