import React from "react";
import ChildB from "./ChildB";

const ChildA = () => {
  return (
    <div>
      <h2>ChildA</h2>
      <ChildB />
    </div>
  );
};

export default ChildA;
