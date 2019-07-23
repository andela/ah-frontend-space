import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TextArea extends Component {
  render() {
    const {
      id, name, className, rows, value, onChange, placeholder,
    } = this.props;
    return (
      <div className="">
        <textarea
          id={id}
          name={name}
          className={className}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  rows: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

TextArea.defaultProps = {
  id: '',
  className: '',
  placeholder: '',
  value: '',
  rows: '8',
};

export default TextArea;
