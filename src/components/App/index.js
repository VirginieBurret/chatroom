// == Import npm
import React from 'react';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
// == Import
import './app.scss';

const messageEnConstruction = 'Salut ça';

const messages = [
  {
    id: 1,
    author: 'vir',
    text: 'salut',
  },

  {
    id: 2,
    author: 'vir',
    text: 'ça va?',
  },

];

// == Composant
const App = () => (
  <div className="chat">
    <Messages listOfMessages={messages}/>
    <Form message={messageEnConstruction} />
  </div>
);

// == Export
export default App;
