import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";

const UseRef = () => {
  const [input, setInput] = useState("");
  const PreviousState = useRef("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  useEffect(() => {
    console.log("data rendered");
    PreviousState.current = input;
  }, [input]);
  return (
    <div>
      <Header />
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <p>Previous State ={PreviousState.current}</p>
      </div>
    </div>
  );
};

export default UseRef;
