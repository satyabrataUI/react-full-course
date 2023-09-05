import React from "react";
import { useContext } from "react";
import { ParentContext } from "./Parent";
const ChildB = () => {
  const childContext = useContext(ParentContext);
  return (
    <div>
      <h3>ChildB={childContext}</h3>
    </div>
  );
};

export default ChildB;
