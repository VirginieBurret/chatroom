import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ type, placeholder, name }) => (
  <input
    className="login-input"
    type={type}
    placeholder={placeholder}
    name={name}
  />
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,

};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
};
export default Field;
