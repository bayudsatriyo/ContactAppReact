// import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import { BrowserRouter } from "react-router-dom";

import "./styles/style.css";
// const element = <h1>Hello World</h1>;

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
);
