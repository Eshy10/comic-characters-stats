import superHeroReducer from '../../redux/reducer/superHeroReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get Characters', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(superHeroReducer(undefined, {
      type: reducerAction.getChracters,
    })).toEqual(initialState);
  });
});
