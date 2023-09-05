import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import UseState from "./component/increment/UseState";
import UseEffect from "./UseEffect hook/UseEffect";
import UseEffect1 from "./UseEffect hook/UseEffect1";
import Parent from "./contexAPI/Parent";
import UseRef from "./useRef Hook/UseRef";
import API from "./CustomHooks/API";
import Loader from "./ReactLoader/Loader";
import store from "./Redux/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
