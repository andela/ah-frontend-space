import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

/* Import Components */
import Input from '../components/common/Input';
import signupAction from '../actions/signupAction';
import '../assets/css/signup.scss';
import spinner from '../assets/images/spinner.gif';
import SocialAuthView from './SocialAuthView';


function inputcontent(type, id, placeholder, name, value, onChange) {
  return (
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
export class SignupForm extends Component {
  /* This life cycle hook gets executed when the component mounts */

  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isValid) {
      const { history } = this.props;
      history.push('/signin');
    }
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    const { signupAction } = this.props;
    e.preventDefault();
    // get our form data out of state
    const {
      username, email, password,
    } = this.state;
    const data = {
      username,
      email,
      password,
    };
    signupAction(data);
  }

  signupFormContent = (username, email, password, isSigningUp) => (
    <div className="row signuppage">
      <div className="col-sm-6">
        <h2 className="text">
          Authors Haven is here to create a community of like
          minded authors to foster inspiration and innovation
          by leveraging the modern web. Create your account
          here to join the community
        </h2>
      </div>
      <div className="col-sm-6 form-contents">
        <h3 className="form-header">Signup here</h3>
        <form className="container" onSubmit={this.handleSubmit}>
          { isSigningUp ? (
            <div className="col-sm-6">
              {' '}
              <img src={spinner} alt="loading...." />
            </div>
          ) : (
            <div>
              {inputcontent('text', 'uname', 'Username', 'username', `${username}`, this.changeHandler)}
              {inputcontent('email', 'email', 'Email', 'email', `${email}`, this.changeHandler)}
              {inputcontent('password', 'pass', 'Password', 'password', `${password}`, this.changeHandler)}
            </div>
          )
              }
          <div className="row signupbutton">
            <div className="col-xs-6">
              <Input type="submit" id="signup" value="signup" name="submit" />
            </div>
          </div>
          <h4 className="words">OR</h4>
          <div className="row social-buttons">
            <SocialAuthView />
          </div>
        </form>
      </div>
    </div>

  )

  render() {
    const {
      username, email, password,
    } = this.state;
    const { isSigningUp } = this.props;
    return (
      <React.Fragment>
        { this.signupFormContent(username, email, password, isSigningUp) }
      </React.Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  const { isSigningUp, isValid } = state.signupReducer;
  return {
    isSigningUp,
    isValid,
  };
};

SignupForm.propTypes = {
  isSigningUp: propTypes.bool.isRequired,
  signupAction: propTypes.func.isRequired,
  isValid: propTypes.bool,
  history: propTypes.shape().isRequired,
  push: propTypes.func,
};

SignupForm.defaultProps = {
  push: () => {},
  isValid: false,
};

export default connect(mapStateToProps, { signupAction })(SignupForm);
