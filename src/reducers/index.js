import {
  CHANGE_MESSAGE_IN_CONSTRUCTION, SEND_MESSAGE, TOGGLE_OPEN, CHANGE_INPUT_VALUE, MEMORIZE_PSEUDO,
} from 'src/actions';

const initialState = {
  open: true,
  messageInConstruction: '',
  messages: [],
  email: '',
  password: '',
  pseudo: 'Anonyme',
  logged: false, // initialement on est pas connecté
};

const reducer = (state = initialState, action = {}) => {
  console.log('dans le reducer', action);

  switch (action.type) {
    case CHANGE_MESSAGE_IN_CONSTRUCTION:
      return {
        ...state,
        messageInConstruction: action.newValue,
      };
    case SEND_MESSAGE:
      // je construis mon nouveau message
      // eslint-disable-next-line no-case-declarations
      const getHighestMessageId = () => {
        // on récupère la propriété messages de state dans une constante messages
        const { messages } = state;

        if (messages.length > 0) {
          // on récupère un tableau contenant seulement les ids des messages
          const ids = messages.map((message) => message.id);
          // on passe l'ensemble des ids à Math.max (ouverture du tableau ids)
          return Math.max(...ids);
        }

        return 0;
      };
      // eslint-disable-next-line no-case-declarations
      const newMessage = { // faire une const dans un case c'est pas top
        id: (getHighestMessageId(state) + 1),
        author: state.pseudo,
        text: state.messageInConstruction,
      };

      // je l'ajoute dans un nouveau tableau
      // eslint-disable-next-line no-case-declarations
      // const newList = [...state.messages]; // tous les messages qu'il y avait déjà
      // eslint-disable-next-line max-len
      // newList.push(newMessage); // + mon nouveau newMessage (et je vais mettre dans mon nouveau state dans le return)

      return {
        ...state, // tout ce qu'il y avait avant dans le state
        messageInConstruction: '', // vider l'input
        messages: [ // les messages c'est
          ...state.messages, // on déverse tous les messages d'avant dans un nouveau tableau
          newMessage, // + le nouveau message
        ],
      };
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,

      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case MEMORIZE_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
        logged: true, // quand on mémorise un pseudo on se considère comme conecté.
      };
    default:
      return state;
  }
};

export default reducer;
