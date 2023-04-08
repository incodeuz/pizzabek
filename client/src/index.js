import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root/index";
import "./index.css";
import PizzaContextComp from "./context/barcha-pitsalar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PizzaContextComp>
      <Root />
    </PizzaContextComp>
  </BrowserRouter>
);
