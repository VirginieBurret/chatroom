import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';
import FeatherIcon from 'feather-icons-react';

const Form = ({ message, changeMessage, sendMessage }) => {
  const handleChange = (event) => {
  // je récupère la saisie de l'utilisateur
    // je veux modifier le message en cours de construction cad modifier le state
    changeMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('je veux envoyer un message');
    // eslint-disable-next-line max-len
    if (message.trim()) { // gérer l'envoie de message vide, trim pour gérer les espaces retire les espaces en début et fin de chaine de caractère
      sendMessage();// j'envoie que si le message actuel est non vide
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
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
  sendMessage: PropTypes.func.isRequired,
};

export default Form;
