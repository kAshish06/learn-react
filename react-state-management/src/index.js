import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { TestApp } from "./ContextTest";
import "./style.css";
import "regenerator-runtime/runtime";
render(<App />, document.getElementById("root"));
// render(<TestApp />, document.getElementById("root"));
