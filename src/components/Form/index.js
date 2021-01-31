import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';
import FeatherIcon from 'feather-icons-react';

const Form = ({ message }) => (

  <form className="form">
    <input
      type="text"
      className="form-input"
      placeholder="saisissez votre message..."
      value={message}
    />

    <button
      type="submit"
      className="form-submit"
    >
      <FeatherIcon icon="send" size={40} />
    </button>
  </form>

);

Form.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Form;
