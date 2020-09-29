import filterReducer from '../../redux/reducer/filterReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get Characters', () => {
  const initialState = '';

  it('should return the initial state', () => {
    expect(filterReducer(undefined, {
      type: reducerAction.filterCharacter,
    })).toEqual(initialState);
  });
  it('should handle change search field', () => {
    expect(filterReducer(initialState, {
      type: 'FILTER_HEROES',
      payload: 'spider man',
    })).toEqual('spider man');
  });
});
