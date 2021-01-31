import React from 'react';

import './form.scss';
import FeatherIcon from 'feather-icons-react';

const Form = () => (

  <form className="form">
    <input
      type="text"
      className="form-input"
      placeholder="saisissez votre message..."
    />

    <button
      type="submit"
      className="form-submit"
    >
      <FeatherIcon icon="send" size={40}/>
    </button>
  </form>

);

export default Form;
