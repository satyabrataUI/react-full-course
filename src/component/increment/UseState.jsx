import React, { useState } from "react";
import Fields from "./Fields";

const UseState = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addClick = () => {
    setData([...data, form]);
    setForm(form);
  };
  const deleteClick = (index) => {
    const updatedData = data.filter((ele, ind) => ind !== index);
    setData(updatedData);
  };

  return (
    <div>
      <h2>Records</h2>
      <div>
        <input
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="name"
          value={form.name}
        />
        <input
          type="text"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="email id"
          value={form.email}
        />{" "}
        <button onClick={addClick}>Add</button>
        <div>
          {data.map((item, index) => (
            <Fields
              name={item.name}
              email={item.email}
              index={item.index}
              data={data}
              setData={setData}
              deleteClick={deleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseState;
