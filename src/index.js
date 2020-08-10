import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//For react-redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./reducers";

//testing
//saving in LOCAL STORAGE
//IMPORTING THE LOCAL STORAGE
import { loadState, saveState } from "./localStorage.js";
const persistedState = loadState();

//CREATE the store
const store = createStore(allReducers, persistedState);
//SAVE the state
store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
    isLogged: store.getState().isLogged,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
