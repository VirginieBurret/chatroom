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

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (newValue, key) => ({
  type: CHANGE_INPUT_VALUE,
  newValue,
  key,

});

export const DO_LOGIN = 'DO_LOGIN';

export const doLogin = () => ({
  type: DO_LOGIN,

});
