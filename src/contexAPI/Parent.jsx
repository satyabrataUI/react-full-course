import React from "react";
import { useState } from "react";
import ChildA from "./ChildA";
let ParentContext = React.createContext();
const Parent = () => {
  const [data, setData] = useState("satya");
  const [name, setName] = useState({ name: "sipun", age: 29 });
  return (
    <div>
      <ParentContext.Provider value={data}>
        <h1>Parent</h1>
        <ChildA />
      </ParentContext.Provider>
    </div>
  );
};

export default Parent;
export { ParentContext };
