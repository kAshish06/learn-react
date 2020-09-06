import React, { useState, useEffect } from "react";
import Input from "./Input";
export default function OrderPizza() {
  let initialState = {
    guests: 0,
    pieces: 0,
    pizza: 0,
  };
  let [guests, setGuests] = useState(initialState.guests);
  let [pieces, setPieces] = useState(initialState.pieces);
  let [pizza, setPizza] = useState(initialState.pieces);
  function calculatePizza(guests, pieces) {
    return Math.floor(guests * pieces);
  }
  function reset() {
    setGuests(0);
    setPieces(0);
  }
  useEffect(() => {
    setPizza(calculatePizza(guests, pieces));
  }, [guests, pieces, setGuests, setPieces]);
  return (
    <div>
      <Input label="Number of Guests" value={guests} onChange={setGuests} />
      <Input label="Number of pieces" value={pieces} onChange={setPieces} />
      <h1>You will need to order {pizza} pizzas.</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
