import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Import provider than provides the store to the app
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
