import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";
import "regenerator-runtime/runtime";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";

const Details = lazy(() => import("./Details"));
const App = () => {
  const themehook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themehook}>
      <div>
        <NavBar />
        {/* <Suspense fallback={<h1>loading route ..</h1>}> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* </Suspense> */}
      </div>
    </ThemeContext.Provider>
  );
};
// render(<App />, document.getElementById("root"));
export default App;
// return React.createElement(
//   "div", // Element tag
//   { id: "main-header" }, // attributes
//   [
//     // Children
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocktiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mixed",
//     }),
//   ]
// );
