import React from 'react';
// import axios from 'axios';
import Field from 'src/containers/LoginForm/Field';
import PropTypes from 'prop-types';
import './loginForm.scss';

const LoginForm = ({ login }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    login(); // j'exécute ma fonction login pour me connecter => je la passe dans le dispatch.
    //console.log('je veux me connecter component');

    // eslint-disable-next-line max-len
    // axios.post('/login', { // en premier argument de post je passe le endpoint et en 2ème argument directement des data
    // email: 'bouclierman@herocorp.io',
    // password: 'jennifer',
    // }, {
    //  baseURL: 'http://localhost:3001', // en 3ème argument la config
    // })
    // .then((response) => {
    //  console.log('Success', response);
    // })
    // .catch((error) => {
    //  console.log('Error', error);
    // });
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <Field
        type="email"
        placeholder="Email"
        name="email"
      />
      <Field
        type="password"
        placeholder="Mot de Passe"
        name="password"
      />

      <button className="login-action" type="submit">
        Envoyer
      </button>

    </form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
export default LoginForm;
