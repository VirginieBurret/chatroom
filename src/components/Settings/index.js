import React from 'react';
import Toggler from 'src/containers/Toggler';
import LoginForm from 'src/components/LoginForm';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './settings.scss';

const Settings = ({ open }) => (
  <div className={classNames('settings', { 'settings--open': open })}> 
 
    <Toggler open={open} />
    { open && <LoginForm />}
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
};
export default Settings;

// la classe setting--open sera présente que si on me donne une donnée à true
