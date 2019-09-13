import React from "react";

const CounterPresenter = ({ counter, onIncrement, onDecrement }) => {
  return (
    <div>
      <label>Counter: {counter}</label>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default CounterPresenter;
