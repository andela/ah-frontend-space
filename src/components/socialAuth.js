import React from 'react';
import propTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import '../assets/css/social.scss';

const socialAuth = (props) => {
  const { onSuccess, onFailure, faceBookResponse } = props;
  return (
    <div className="btns-social">
      <GoogleLogin
        clientId="1079381724140-64j8ntrenu2t18h69s3eucpr2fmr00tg.apps.googleusercontent.com"
        buttonText="Login with google"
        className="google-facebook"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <br />
      <FacebookLogin
        appId="562588757838544"
        fields="name,email,picture"
        callback={faceBookResponse}
        cssClass="google-facebook"
      />
    </div>
  );
};

socialAuth.propTypes = {
  onSuccess: propTypes.func.isRequired,
  onFailure: propTypes.func.isRequired,
  faceBookResponse: propTypes.func.isRequired,
};

export default socialAuth;
