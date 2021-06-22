import React from 'react';
import {useState} from 'react';

const ErrorExample = () => {
  const [data, setData] = useState("Hello world");
  const handleClick = ()=>{
    
      setData("useState")
    
  }

  return <>
  <h2>{data}</h2>
  <button onClick={handleClick}>Change Title</button>

  </>
};

export default ErrorExample;
