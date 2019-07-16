/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { fetchProfile } from '../../actions/profileActions';
import ProfileComponent from '../../components/profile/ProfileFetch';
import { Authenticated } from '../../routes/Authenticated';


export class Profile extends Component {
  componentDidMount() {
    const { fetchProfile } = this.props;
    fetchProfile();
  }

  render() {
    const { profile } = this.props;
    return (<ProfileComponent profile={profile} />);
  }
}

export const mapStateToProps = state => (
  {
    profile: state.profile,
  }
);

Profile.propType = {
  props: PropType.object.isRequired,
  fetchProfile: PropType.func.isRequired,
  profile: PropType.object.isRequired,
};

export default connect(mapStateToProps, { fetchProfile })(Authenticated(Profile));
