import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [name, setName] = useState("satya");
  const handleChange = (msg) => {
    setName(msg);
  };
  return (
    <div>
      <h2>Parent Comp</h2>
      {name}
      <Child handleChange={handleChange} />
    </div>
  );
};
