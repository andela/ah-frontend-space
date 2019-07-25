
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { editUserProfile, fetchProfile } from '../../actions/profileActions';
import firebase from '../../firebase/firebase.config';
import ProfileEditComponent from '../../components/profile/ProfileEdit';
import { Authenticated } from '../../routes/Authenticated';


export class ProfileIsEdited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      bio: '',
      image: '',
      buttonLoading: false,
      status: 0,
    };
  }

  componentDidMount() {
    const { fetchProfile, profile: { profile } } = this.props;
    fetchProfile();
  }


  componentWillReceiveProps(nextProps) {
    const {
      first_name, last_name, username, date_of_birth, bio, image,
    } = nextProps.profile.profile;
    if (username) {
      this.setState({
        firstName: first_name,
        lastName: last_name,
        username,
        image,
        dateOfBirth: date_of_birth,
        bio,
      });
    }
  }

  fetchData = () => {
    this.setState({ buttonLoading: true });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchData();
    const {
      firstName, lastName, username, dateOfBirth, bio, image,
    } = this.state;

    const ProfileData = {
      first_name: firstName,
      last_name: lastName,
      username,
      date_of_birth: dateOfBirth,
      bio,
      image,
    };
    const { editUserProfile } = this.props;
    editUserProfile(ProfileData, this.props);
  }

  /* istanbul ignore next */
  uploadImage(files) {
    const fileload = firebase
      .storage()
      .ref(`images/${files[0].name}`)
      .put(files[0]);
    fileload.then(() => {
      firebase
        .storage()
        .ref(`images/${files[0].name}`)
        .getDownloadURL()
        .then((url) => {
          const image = {
            image: url,
          };
          this.setState({ image: image.image });
        });
    });
    fileload.on('state_changed', (snapshot) => {
      const status = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      );
      this.setState({ status });
    });
  }

  render() {
    const {
      firstName, lastName, dateOfBirth, bio, image, buttonLoading, status,
    } = this.state;
    return (
      <ProfileEditComponent
        firstName={firstName}
        lastName={lastName}
        dateOfBirth={dateOfBirth}
        bio={bio}
        image={image}
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        buttonLoading={buttonLoading}
        uploadImage={this.uploadImage}
        imageOnChange={event => this.uploadImage(event.target.files)}
        status={status}

      />
    );
  }
}

export const mapStateToProps = state => ({
  profile: state.profile,
});

ProfileIsEdited.defaultProps = {
  fetchProfile: () => {},
};

ProfileIsEdited.propTypes = {
  fetchProfile: PropType.func,
}.isRequired;

export default connect(
  mapStateToProps,
  { fetchProfile, editUserProfile },
)(Authenticated(ProfileIsEdited));
