/* eslint-disable import/prefer-default-export */

// on définit un selecteur qui permet de déterminer
// le plus grand identifiant existant pour message
export const getHighestMessageId = (state) => {
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
