import React from "react";
import ReactDOM from "react-dom";
import App from "./componets/MainChat";
import "bootstrap/dist/css/bootstrap.min.css";
import MainChat from "./componets/MainChat";

ReactDOM.render(
  <React.StrictMode>
    <MainChat />
  </React.StrictMode>,
  document.getElementById("root")
);
