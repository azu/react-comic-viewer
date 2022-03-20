import React, { StrictMode } from "react";
import { render } from "react-dom";
import Pages from "./pages/controlled";
import "./styles/global.css";

render(
  <StrictMode>
    <Pages />
  </StrictMode>,
  document.getElementById("root")
);
