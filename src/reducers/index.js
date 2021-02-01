import { CHANGE_MESSAGE_IN_CONSTRUCTION } from 'src/actions';

const initialState = {
  messageInConstruction: 'coucou',
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
    default:
      return state;
  }
};

export default reducer;
