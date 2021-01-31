import React from 'react';
import './messages.scss';
import PropTypes from 'prop-types';

const Message = ({ author, text }) => (

  <div className="message">
    <p className="message-author">{author}</p>
    <p className="message-content">{text}</p>

  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

};

export default Message;
