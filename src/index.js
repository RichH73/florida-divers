import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import axios from "axios";

// const store = createStore(allReducers)
//  export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(logger)))
export const store = createStore(
  allReducers,
  // composeWithDevTools(applyMiddleware(thunk)),
  applyMiddleware(thunk)
);

// const configs = axios.get('http://floridivers.com:8600/config')
// .then((response) => {
//     console.log(response)
//     store.dispatch({
//         type: "Set_Config",
//         ...response
//       });
// })

const diveCourses = axios({
  method: "get",
  url: "http://floridivers.com:8600/learning",
  //url: "http://floridivers.com:8600/learning",
}).then((response) => {
  let diveCourses = response.data;
  console.log("packs", diveCourses);
  store.dispatch({
    type: "NewPackages",
    diveCourses,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
