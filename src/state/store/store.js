import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
