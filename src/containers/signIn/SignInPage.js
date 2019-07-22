import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import * as signInActions from '../../actions/siginInActions/signInActions';
import SignInForm from '../../components/signIn/SignInForm';

export class SignInPage extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    errors: {
      onSave: false,
    },
  };

  onChangeHandler = (event) => {
    const { user } = this.state;
    const newuser = {
      ...user,
      [event.target.name]: event.target.value,
    };
    this.setState({
      user: newuser,
      errors: {
        onSave: false,
        password: '',
        email: '',
      },
    });
  };

  onSubmitHandler = (event) => {
    const { actions, history } = this.props;
    const { user, errors } = this.state;

    event.preventDefault();
    if (this.formIsInValid()) return;
    actions
      .userSignIn(user)
      .then(() => {
        history.push('/articles');
        toast.success(`successfully logged in as ${user.email}`, {
          autoClose: 3000,
        });
      })
      .catch((errorResponse) => {
        const { error } = errorResponse;
        toast.error(`${error}`, {
          autoClose: 3000,
        });
        const newErrors = Object.assign({}, errors, { error });
        this.setState({ errors: newErrors });
      });
  };

  formIsInValid() {
    const { user: { email, password }, errors } = this.state;

    if (!email) {
      errors.email = 'Email is required.';
      errors.onSave = true;
    }
    if (!password) {
      errors.password = 'Password is required';
      errors.onSave = true;
    }

    Object.assign({}, errors, { errors });
    this.setState({ errors });

    return errors.onSave;
  }

  render() {
    const { user: { email, password }, errors } = this.state;
    const { loading } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 wrapper">
              <div className="signin-text">
                <br />
              </div>
              <SignInForm
                email={email}
                password={password}
                errors={errors}
                onChange={this.onChangeHandler}
                onSubmit={this.onSubmitHandler}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SignInPage.propTypes = {
  actions: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.shape(),
};

SignInPage.defaultProps = {
  history: {},
};

export function mapStateToProps(state) {
  return {
    user: state.user,
    errors: state.errors,
    loading: state.apiCallsInProgress > 0,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signInActions, dispatch),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPage);
