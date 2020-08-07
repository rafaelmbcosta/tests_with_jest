import React, { useState } from 'react';

const CountComponentFuncion = () => {
  // const [count, setCount] = useState(0);

  // const increaseCounter = () => {
  //   let currentCount = count;
  //   setCount(++currentCount);
  // }

  return(
    <div data-test="count-component-function">
      <h1> Function based component</h1>
      {/* <h1>Here goes to counter: {count}</h1> */}
      {/* <input type="button" value="increase" onClick={() => increaseCounter()}/> */}
    </div>
  );
}

export default CountComponentFuncion;
