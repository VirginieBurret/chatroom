// == Import npm
import React from 'react';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="chat">
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
