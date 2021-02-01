// == Import npm
import React from 'react';
import Messages from 'src/components/Messages';
import Form from 'src/containers/Form';
// == Import
import './app.scss';

const messages = [
  {
    id: 1,
    author: 'vir',
    text: 'salut ça va',
  },
  {
    id: 2,
    author: 'vir',
    text: 'ouiiii',
  },
];

// == Composant
const App = () => (
  <div className="chat">
    <Messages listOfMessages={messages} />
    <Form />
  </div>
);

// == Export
export default App;
