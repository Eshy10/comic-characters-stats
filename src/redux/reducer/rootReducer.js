import { combineReducers } from 'redux';
import superHeroReducer from './superheroReduder';
import filterReducer from './filterReducer';
import heroIDReducer from './characterReducer';

const rootReducer = combineReducers({
  heroes: superHeroReducer,
  filter: filterReducer,
  character: heroIDReducer,
});

export default rootReducer;