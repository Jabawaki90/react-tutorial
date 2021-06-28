import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const reffContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reffContainer.current.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" ref={reffContainer} />
      <button className="button">submit</button>
    </form>
  );
};

export default UseRefBasics;
