import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const initialState = {
  heroes: [],
  filter: '',
  character: {},
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);

export default store;
