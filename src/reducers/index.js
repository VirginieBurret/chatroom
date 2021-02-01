import { CHANGE_MESSAGE_IN_CONSTRUCTION, SEND_MESSAGE } from 'src/actions';

const initialState = {
  messageInConstruction: '',
  messages: [
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
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MESSAGE_IN_CONSTRUCTION:
      return {
        ...state,
        messageInConstruction: action.newValue,
      };
    case SEND_MESSAGE:
      // je construis mon nouveau message
      // eslint-disable-next-line no-case-declarations
      const newMessage = {
        id: 3,
        author: 'vir',
        text: 'cool',
      };

      // je l'ajoute dans un nouveau tableau
      // eslint-disable-next-line no-case-declarations
      // const newList = [...state.messages]; // tous les messages qu'il y avait déjà
      // eslint-disable-next-line max-len
      // newList.push(newMessage); // + mon nouveau newMessage (et je vais mettre dans mon nouveau state dans le return)

      return {
        ...state,
        messageInConstruction: '',
        messages: [
          ...state.messages,
          newMessage,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
