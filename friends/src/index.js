import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Import provider than provides the store to the app
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
// rootReducer from ./reducers
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
