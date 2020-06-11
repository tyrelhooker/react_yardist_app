import React from 'react';

const Count = ({ testCount, onDecrement, onIncrement }) =>
  <div>
    <h1>{testCount}</h1>
    <button type='button' onClick={onDecrement}> Decrement </button>
    <button type='button' onClick={onIncrement}>Increment </button>
  </div>

export default Count;