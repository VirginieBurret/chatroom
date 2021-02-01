export const CHANGE_MESSAGE_IN_CONSTRUCTION = 'CHANGE_MESSAGE_IN_CONSTRUCTION';

export const changeMessageInConstruction = (newValue) => ({
  type: CHANGE_MESSAGE_IN_CONSTRUCTION,
  newValue, //  newValue : newValue
});

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = () => ({
  type: SEND_MESSAGE,

});

export const TOGGLE_OPEN = 'TOGGLE_OPEN';

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,

});
