import React, { Fragment, useState } from 'react';

export default function CounterHooks() {
  const [counter, setCounter] = useState(0);

  function handleDecrementClick() {
    setCounter(prevCounter => prevCounter - 1);
  }

  function handleIncrementClick() {
    setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <Fragment>
      <div>{counter}</div>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
    </Fragment>
  );
}
