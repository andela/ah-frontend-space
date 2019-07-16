/* eslint-disable react/no-this-in-sfc */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/images/profile.png';

function buttons(onSubmit, buttonLoading) {
  return (
    <Fragment>
      <div className="buttons">

        <button type="submit" onClick={onSubmit} disabled={buttonLoading} className="btn btn-primary btn-lg">
          {buttonLoading && (<i className="spinner-grow spinner-grow-sm" />)}
          {buttonLoading && <span>Just A sec Please!...</span>}
          {!buttonLoading && <span>Update Profile</span>}
        </button>
        <Link className="btn btn-danger btn-lg cancel" to="/profile">
                Cancel
        </Link>
      </div>
    </Fragment>
  );
}


function inputs(Label, type, name, handleChange, value) {
  return (
    <Fragment>
      <p>
        {Label}
        <input style={{ 'margin-left': '30px' }} type={type} name={name} onChange={handleChange} value={value} />
      </p>
    </Fragment>
  );
}
function ProfileEditComponent({
  firstName, lastName, dateOfBirth, bio, image, onSubmit,
  handleChange, buttonLoading, imageOnChange, status,
}) {
  return (
    <Fragment>
      <div className="container-fluid">
        <hr className="hr-primary" />
        <h1 className="profiletitle">Edit Your Personal Details</h1>
        <hr className="hr-primary" />
        <form onSubmit={onSubmit}>
          <div style={{ display: 'flex' }}>
            <div style={{
              display: 'flex', flex: 0.7, flexDirection: 'column', margin: '0 auto',
            }}
            >
              {(image !== 'url') ? (
                <img
                  src={image}
                  alt=""
                  width="370em"
                  height="310em"
                  radius="6px"
                />
              ) : (
                <img
                  alt="profileimage"
                  className="default-view"
                  src={profileImage}
                  width="370em"
                  height="310em"
                  radius="6px"
                />
              )}
              <br />
              <input type="file" name={image} onChange={imageOnChange} />
              <progress value={status} max="100" />
            </div>
            <div
              className="edit-side form-control"
              style={{
                display: 'flex', flex: 1, flexDirection: 'column', margin: '0 auto',
              }}
            >
              {inputs('firstName', 'text', 'firstName', handleChange, firstName)}
              {inputs('lastName', 'text', 'lastName', handleChange, lastName)}
              {inputs('Birth Day', 'date', 'dateOfBirth', handleChange, dateOfBirth)}
              <p>
                Bio
                <textarea style={{ 'margin-left': '30px' }} type="text" value={bio} name="bio" onChange={handleChange} />
              </p>
              <br />
              {buttons(onSubmit, buttonLoading)}
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}


const Props = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  buttonLoading: PropTypes.bool.isRequired,
  imageOnChange: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
};

ProfileEditComponent.propTypes = Props;

export default ProfileEditComponent;
