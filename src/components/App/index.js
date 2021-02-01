// == Import npm
import React from 'react';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';
// == Import
import './app.scss';


// == Composant
const App = () => (
  <div className="chat">
    <Messages />
    <Form />
    <Settings />
  </div>
);

// == Export
export default App;
