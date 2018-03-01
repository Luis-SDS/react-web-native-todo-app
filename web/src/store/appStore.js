import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers";

export default (initialState = {}) => {
  const middlewares = [thunk];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if ("__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" in window) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }

    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
  }

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};
