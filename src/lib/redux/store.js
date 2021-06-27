import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from "./reducers";
import { logger, monitorReducerEnhancer } from "./utils";
import thunk from "redux-thunk";
const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  undefined,
  composedEnhancers(middlewareEnhancer, monitorReducerEnhancer)
);
