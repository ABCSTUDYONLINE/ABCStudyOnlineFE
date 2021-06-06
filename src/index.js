import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Redux } from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Redux />
  </React.StrictMode>,
  document.getElementById("root")
);
