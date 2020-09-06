import React from "react";

export default function MouseoverCounter({ count, increment }) {
  return <h1 onMouseOver={increment}>Mouseover {count} times</h1>;
}
