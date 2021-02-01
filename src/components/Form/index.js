import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';
import FeatherIcon from 'feather-icons-react';

const Form = ({ message, changeMessage }) => {
  const handleChange = (event) => {
  // je récupère la saisie de l'utilisateur
    // je veux modifier le message en cours de construction cad modifier le state
    changeMessage(event.target.value);
  };
  return (
    <form className="form">
      <input
        type="text"
        className="form-input"
        placeholder="saisissez votre message..."
        value={message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="form-submit"
      >
        <FeatherIcon icon="send" size={40} />
      </button>
    </form>
  );
};
Form.propTypes = {
  message: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired,
};

export default Form;
