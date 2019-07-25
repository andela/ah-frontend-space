/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileImage from '../../assets/images/profile.png';


function SubContent(profile, className, label) {
  return (
    <Fragment>
      <p className={className}>
        {' '}
        <strong style={{ 'font-weight': 'lighter', 'margin-right': '30px' }}>
          {label}
        </strong>
        {profile}
        {' '}
      </p>
    </Fragment>
  );
}

function ProfileComponentContent(profile) {
  console.log(profile.image, 'great');
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="profile">
          <hr className="hr-primary" />
          <h1 className="profiletitle">User Profile</h1>
          <hr className="hr-primary" />
          <div className="profile-data" style={{ display: 'flex' }}>
            <div
              className="profile-side"
              style={{
                display: 'flex', flex: 1, 'flex-direction': 'column', margin: '0 auto',
              }}
            >
              {(profile.image !== 'url') ? (
                <img
                  src={profile.image}
                  alt=""
                  width="370em"
                  height="310em"
                />
              ) : (
                <img
                  alt="profileimage"
                  className="default-view"
                  src={profileImage}
                  width="370em"
                  height="310em"
                />
              )}
              <br />
            </div>
            <div className="profile-desc" style={{ display: 'flex', flex: 1.5, 'flex-direction': 'column' }}>
              <div style={{ display: 'block' }}>
                {SubContent((profile.first_name), 'firstname', 'First Name')}
                <hr className="hr-primary" />
                { SubContent((profile.last_name), 'lastname', 'Last Name')}
                <hr className="hr-primary" />
                {SubContent((profile.username), '', 'Username')}
                <hr className="hr-primary" />
                {SubContent((profile.following), '', 'Following')}
                {profile.following}
                <hr className="hr-primary" />
                {SubContent((profile.date_of_birth), '', 'Date Of Birth')}
                <hr className="hr-primary" />
                <br />
                { SubContent((profile.bio), '', 'Biography')}
                <hr className="hr-primary" />
                <br />
                <Link className="btn btn-primary edit-button" to="/editprofile">Edit Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


function ProfileComponent(props) {
  const { profile: { profile } } = props;
  return (
    <div>
      {ProfileComponentContent(profile)}
    </div>
  );
}

ProfileComponent.propTypes = {
  profile: PropTypes.shape().isRequired,
};

export default ProfileComponent;
