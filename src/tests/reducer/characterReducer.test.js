import heroIDReducer from '../../redux/reducer/characterReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get unique character', () => {
  const initialState = {};

  it('should return the initial state', () => {
    expect(heroIDReducer(undefined, {
      type: reducerAction.getChracters,
    })).toEqual(initialState);
  });
});
