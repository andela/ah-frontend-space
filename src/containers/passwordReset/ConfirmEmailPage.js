import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ConfirmEmailForm from '../../components/passwordReset/ConfirmEmailForm';
import * as passwordResetActions from '../../actions/passwordResetActions/passwordResetActions';

export class ConfirmEmailPage extends Component {
  state = {
    user: {
      email: '',
    },
  };

  onChangeHandler = (event) => {
    const { user } = this.state;
    const emailInput = {
      ...user,
      email: event.target.value,
    };
    this.setState({
      user: {
        email: emailInput,
      },
    });
  }

  onSubmitHandler = (event) => {
    const { actions } = this.props;
    const { user } = this.state;
    event.preventDefault();
    actions.confirmEmail(user);
  };

  render() {
    const { email } = this.state;
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
              <h2>Enter your email address</h2>
              <ConfirmEmailForm
                value={email}
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

ConfirmEmailPage.propTypes = {
  actions: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
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
)(ConfirmEmailPage);
