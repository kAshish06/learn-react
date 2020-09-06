import React, { useState } from "react";

export default function CounterHOC(Component) {
  //   let [count, setCount] = useState(0);
  let count = 0;
  function increment() {
    // setCount(count + 1);
  }
  return function withCounter() {
    return <Component count={count} increment={increment} />;
  };
}
