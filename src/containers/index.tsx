import React, { StrictMode } from "react";
import { render } from "react-dom";
import Pages from "./pages";
import "./styles/global.scss";

render(
  <StrictMode>
    <Pages />
  </StrictMode>,
  document.getElementById("root")
);
