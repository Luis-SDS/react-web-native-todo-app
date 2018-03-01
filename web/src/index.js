import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Store from "./store/appStore";
import App from "./containers/App";
import "./css/index.css";

render(
  <Provider store={Store()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
