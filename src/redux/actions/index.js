export const getChracters = character => ({
  type: 'GET_CHARACTERS',
  payload: character,
});

export const filterCharacter = character => ({
  type: 'FILTER_HEROES',
  payload: character,
});

export const setCharacterID = character => ({
  type: 'GET_CHARACTERS_ID',
  payload: character,
});
