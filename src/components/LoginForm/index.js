import React from 'react';
import Field from 'src/containers/LoginForm/Field';
import './loginForm.scss';

const LoginForm = () => (
  <form className="login">
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

export default LoginForm;
