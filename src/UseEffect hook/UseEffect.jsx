import React from "react";
import { useState, useEffect } from "react";
const UseEffect = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);
  useEffect(() => {
    window.alert("useEffect Called...");
  }, [state, state1]);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>Increment {state}</button>
      <button onClick={() => setState1(state1 + 1)}>Increment {state1}</button>
    </div>
  );
};

export default UseEffect;
