import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(thunk);
}

const initialState = {
  heroes: [],
  filter: "",
  character: {},
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
