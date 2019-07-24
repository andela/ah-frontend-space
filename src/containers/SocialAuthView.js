import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import SocialAuthButtons from '../components/socialAuth';
import SocialAuthActions from '../actions/socialAuthActions';

export class SocialAuthView extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.socialAuth.isAuthenticated) {
      const { history } = this.props;
      history.push('/');
    }
  }

    handleResponseGoogle = (response) => {
      const { google } = this.props;
      return google(response.tokenObj.id_token);
    }

    handleResponseFacebook = (response) => {
      const { facebook } = this.props;
      return facebook(response.accessToken);
    }

    handleGoogleFailure = (response) => {
      toast.error(response.error, {
        autoclose: 8000,
        hideProgressBar: false,
      });
    }

    render() {
      return (
        <SocialAuthButtons
          onSuccess={this.handleResponseGoogle}
          onFailure={this.handleGoogleFailure}
          faceBookResponse={this.handleResponseFacebook}
        />
      );
    }
}
export const mapStateToProps = state => ({
  socialAuth: state.socialAuth,
});
SocialAuthView.propTypes = {
  google: propTypes.func.isRequired,
  facebook: propTypes.func.isRequired,
  history: propTypes.shape().isRequired,
  push: propTypes.func,
  socialAuth: propTypes.shape(),
  isAuthenticated: propTypes.bool,

};
SocialAuthView.defaultProps = {
  push: () => {},
  socialAuth: {},
  isAuthenticated: false,

};

export default withRouter(connect(mapStateToProps,
  {
    google: SocialAuthActions.googleSignup,
    facebook: SocialAuthActions.facebookSignup,
  })(SocialAuthView));
