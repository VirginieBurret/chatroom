import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './messages.scss';

const Messages = ({ listOfMessages }) => (

  <section className="messages">
    {listOfMessages.map((message) => (
      <Message key={message.id} {...message} />
    ))}

  </section>
);

Messages.propTypes = {
  listOfMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;
