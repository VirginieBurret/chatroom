import axios from 'axios';
import { DO_LOGIN, memorizePseudo} from 'src/actions';

const ajax = (store) => (next) => (action) => {
  console.log('dans ajax ', action);
  switch (action.type) {
    case DO_LOGIN: {
      const state = store.getState();
      const { email, password } = store.getState();
      console.log(state);
      
      axios.post('/login', { // en premier argument de post je passe le endpoint et en 2ème argument directement des data
        email, // email: email,
        password, // password: password,
      }, {
        baseURL: 'http://localhost:3001', // en 3ème argument la config
      })
        .then((response) => {
          console.log('Success', response);
          // en cas de succès je veux mémoriser le pseudo de l'utilisateur connecté
          // je le mémorise pour m'en servir dans mon application via les props
          store.dispatch(memorizePseudo(response.data.pseudo)); // je dispatche une action qui véhiculera le pseudo jusqu'au reducer
         //response.data.pseudo;
         // et le reducer pourr mémoriser ça
        })
        .catch((error) => {
          console.log('Error', error);
        });
      break; // car je ne retourne rien
    }
    default:
      next(action); // toutes les autres actions qui m'intéressent pas je les laisse passer
  }
};

export default ajax;
