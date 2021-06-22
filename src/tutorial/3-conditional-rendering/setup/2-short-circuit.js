import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [error, setError] = useState(false)

  return <>
    <h2>short circuit</h2>
    <button onClick={()=>{setError(!error)}}>toggle me</button>
    {!error && <h1>Error!</h1>}
  </>;
};

export default ShortCircuit;
