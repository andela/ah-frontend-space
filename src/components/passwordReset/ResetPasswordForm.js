import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Input from '../common/Input';

const ResetPasswordForm = ({
  password1, password2, onChange, loading, onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <div className="col-md-6 col-sm-12">
      <div className="form-group form-group-lg">
        <Input
          className="input-field"
          type="password"
          name="password1"
          onChange={onChange}
          placeholder="Enter password here"
          value={password1}
        />
        <Input
          className="input-field"
          type="password"
          name="password2"
          onChange={onChange}
          placeholder="Confirm password here"
          value={password2}
        />
        { loading
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
              className="btn-signin btn-reset"
              value="Reset"
            />
          )}
      </div>
    </div>
  </form>
);


ResetPasswordForm.propTypes = {
  password1: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

ResetPasswordForm.defaultProps = {
};

export default ResetPasswordForm;
