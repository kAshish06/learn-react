import React from "react";
import ClickCounter from "./ClickCounter";
import MouseoverCounter from "./MouseoverCounter";
import Counter from "./Counter";

let WrappedMouseoverCounter = Counter(MouseoverCounter);
let WrappedClickCounter = Counter(ClickCounter);
export default function HOCEx() {
  return (
    <div>
      <WrappedClickCounter />
      <WrappedMouseoverCounter />
    </div>
  );
}
