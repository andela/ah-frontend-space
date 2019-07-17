import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import SocialAuthView from '../../containers/SocialAuthView';

const SignInForm = ({
  email,
  password,
  onChange,
  onSubmit,
  loading,
  errors,
}) => (
  <React.Fragment>
    <div className="login-form-wrapper">
      <form onSubmit={onSubmit}>
        <div className="form-logo">
          <h2>
            Authors |
            {' '}
            <i>Haven</i>
          </h2>
        </div>
        {errors.onSave && errors.email && (
          <div style={{ display: 'none' }}>{toast.error(errors.email)}</div>
        )}
        <Input
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={onChange}
          placeholder="Enter email here"
          required={false}
        />

        {errors.onSave && errors.password && (
          <div id="form-errors" style={{ display: 'none' }}>{toast.error(errors.password)}</div>
        )}
        <Input
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={onChange}
          placeholder="Enter password here"
          required={false}
        />

        <div className="form-group">
          <div className="field">
            <div className="loading">
              {loading
                ? (
                  <Loader
                    type="Puff"
                    color="#00bfff"
                    height="20"
                    width="20"
                  />
                )
                : (
                  <Input
                    type="submit"
                    id="submit"
                    disabled={loading}
                    className="btn-signin"
                    value="Sign In"
                  />
                )}
            </div>
            <div className="form-link-container">
              <Link className="form-link signup" to="/signup">Sign Up</Link>
              <Link className="form-link password-reset" to="/password-reset">Forgot Password?</Link>
              <SocialAuthView />
            </div>
          </div>
        </div>
      </form>
    </div>
    <socialAuthButtons />
  </React.Fragment>
);

SignInForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.shape(),
};

SignInForm.defaultProps = {
  errors: {},
};

export default SignInForm;
