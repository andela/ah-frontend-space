import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  type, name, id, placeholder, value, onChange,
}) => (
  <div className="form-group">
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
};

Input.defaultProps = {
  id: '',
  placeholder: '',
  onChange: () => {},
};

export default Input;
