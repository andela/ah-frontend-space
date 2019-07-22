import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Input from '../common/Input';

const ConfirmEmailForm = ({
  email, onChange, loading, onSubmit,
}) => (


  <form onSubmit={onSubmit}>
    <div className="col-md-9 col-sm-12">
      <div className="form-group form-group-lg">
        <Input
          id="confirm-email"
          type="email"
          name="email"
          onChange={onChange}
          placeholder="Enter your email here"
          value={email}
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
              className="btn-signin btn-verify"
              value="Verify"
            />
          )}
      </div>
    </div>
  </form>
);


ConfirmEmailForm.propTypes = {
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

ConfirmEmailForm.defaultProps = {
};

export default ConfirmEmailForm;
