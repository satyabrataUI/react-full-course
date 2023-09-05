import React from "react";

export const Child = ({ handleChange }) => {
  return (
    <div>
      <button onClick={() => handleChange("satyabrata swain")}>Change</button>
    </div>
  );
};
