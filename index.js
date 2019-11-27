import React from "react";
import { render } from "react-dom";
import App from "./App";
import { StateProvider } from "./store.js";
import "./style.css";

const app = (
  <StateProvider>
    <App />
  </StateProvider>
);

render(app, document.getElementById("root"));
