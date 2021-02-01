import React from 'react';
import Field from './Field';
import './loginForm.scss';

const LoginForm = () => (
  <form className="login">
    <Field
      type="email"
      placeholder="Email"
      name="Email"
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

export default LoginForm;
