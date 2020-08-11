import React, { useState } from 'react';

const CountComponentFunction = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    let currentCounter = counter;
    setCounter(++currentCounter);
  }

  return(
    <div data-test="count-component-function">
      <h1>Function based component</h1>
      <h1 data-test="counter-display-function">Here goes to counter: {counter}</h1>
      <input
        data-test="increment-button-function"
        type="button"
        value="increase"
        onClick={() => increaseCounter()}
      />
    </div>
  );
}

export default CountComponentFunction;
