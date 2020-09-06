import React from "react";

export default function ClickCounter({ count, increment }) {
  return <button onClick={increment}>Clicked {count} time</button>;
}
