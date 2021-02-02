import axios from 'axios';

const ajax = (store) => (next) => (action) => {
  console.log('dans ajax ', action);
  switch (action.type) {
    case 'DO_LOGIN':
      axios.post('/login', { // en premier argument de post je passe le endpoint et en 2ème argument directement des data
        email: 'bouclierman@herocorp.io',
        password: 'jennifer',
      }, {
        baseURL: 'http://localhost:3001', // en 3ème argument la config
      })
        .then((response) => {
          console.log('Success', response);
        })
        .catch((error) => {
          console.log('Error', error);
        });
      break; // car je ne retourne rien
    default:
      next(action); // toutes les autres actions qui m'intéressent pas je les laisse passer
  }
};

export default ajax;
