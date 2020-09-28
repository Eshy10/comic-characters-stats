import * as reducerAction from '../redux/actions/index';

describe('get Characters', () => {
  const parameter = 'character';

  it('should create an action to search for all comic characters', () => {
    const expectedAction = {
      type: 'GET_CHARACTERS',
      payload: parameter,
    };
    expect(reducerAction.getChracters(parameter)).toEqual(expectedAction);
  });

  it('should create an action to search for a character', () => {
    const expectedAction = {
      type: 'FILTER_HEROES',
      payload: parameter,
    };
    expect(reducerAction.filterCharacter(parameter)).toEqual(expectedAction);
  });

  it('should create an action to search for a unique comic characters', () => {
    const expectedAction = {
      type: 'GET_CHARACTERS_ID',
      payload: parameter,
    };
    expect(reducerAction.setCharacterID(parameter)).toEqual(expectedAction);
  });
});
