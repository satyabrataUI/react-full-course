import React from "react";

const Fields = ({ name, email, data, setData, index }) => {
  const deleteClick = (index) => {
    const updatedData = data.filter((ele, ind) => ind !== index);
    setData(updatedData);
  };
  return (
    <div>
      <p>
        Name: {name} and Email: {email}
        <button onClick={() => deleteClick(index)}>Delete</button>
      </p>
    </div>
  );
};

export default Fields;
