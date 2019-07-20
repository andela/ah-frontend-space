import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import ResetPasswordForm from '../../components/passwordReset/ResetPasswordForm';
import * as passwordResetActions from '../../actions/passwordResetActions/passwordResetActions';

export class ResetPasswordPage extends Component {
  state = {
    user: {
      password1: '',
      password2: '',
    },
  };

  onChangeHandler = (event) => {
    const { user } = this.state;
    const passwordInput = {
      ...user,
      [event.target.name]: event.target.value,
    };
    this.setState({
      user: passwordInput,
    });
  }

  formIsValid = () => {
    toast.dismiss();
    const { user: { password1, password2 } } = this.state;
    let isValid = true;
    if (password1 !== password2) {
      toast.error("Passwords don't match. Try again");
      isValid = false;
    }
    return isValid;
  };

  onSubmitHandler = (event) => {
    const { actions, location, history } = this.props;
    const { user } = this.state;
    const resetData = {
      user,
      location,
    };
    event.preventDefault();
    if (this.formIsValid()) {
      actions.resetPasswordCall(resetData)
        .then(
          toast.dismiss(),
          history.push('/signin'),
        );
    }
  };

  render() {
    const { user: { password1, password2 } } = this.state;
    const { loading } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center confirm-email">
              <div className="form-logo">
                <h2>
                  Authors |
                  {' '}
                  <i>Haven</i>
                </h2>
              </div>
              <h2>Enter your new password here</h2>
              <ResetPasswordForm
                password1={password1}
                password2={password2}
                onChange={this.onChangeHandler}
                onSubmit={this.onSubmitHandler}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
  actions: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.shape(),
  history: PropTypes.shape(),
};

ResetPasswordPage.defaultProps = {
  location: {},
  history: {},
};

export const mapStateToProps = state => ({
  user: state.user,
  loading: state.apiCallsInProgress > 0,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(passwordResetActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordPage);
