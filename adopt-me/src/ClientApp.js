import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
//All the code that runs in browser
hydrate(<App />, document.getElementById("root"));
