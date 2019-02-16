import React, { Fragment } from 'react';

interface Props {
  counter: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export default function CounterView({ counter, onDecrement, onIncrement }: Props) {
  return (
    <Fragment>
      <h1>Counter</h1>
      <div>{counter}</div>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement}>Increment</button>
    </Fragment>
  );
};
