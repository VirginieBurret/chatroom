const initialState = {
  messageEnConstruction: 'coucou',
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
    default:
      return state;
  }
};

export default reducer;
