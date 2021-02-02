import React from 'react';
import Toggler from 'src/containers/Toggler';
import LoginForm from 'src/containers/LoginForm';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './settings.scss';

const Settings = ({ open , logged, pseudo}) => (
  <div className={classNames('settings', { 'settings--open': open })}> 
 
    <Toggler />
    { !logged && <LoginForm />}
    { logged && <p>Bienvenue {pseudo}</p>}
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
};
export default Settings;

// la classe setting--open sera présente que si on me donne une donnée à true
