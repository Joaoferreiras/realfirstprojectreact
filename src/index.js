import React from "react";
import ReactDOM from "react-dom";
import MyRoutes from "./routes";
import GlobalStyle from "./styles/globalStyles";

ReactDOM.render(
  <>
    <MyRoutes/> <GlobalStyle />
  </>,
  document.getElementById("root")
);
