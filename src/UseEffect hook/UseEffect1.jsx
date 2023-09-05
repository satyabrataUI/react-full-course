import React from "react";
import { useState, useEffect } from "react";
const UseEffect1 = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  const FetchData = async () => {
    const response = await fetch(
      `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
    );
    const json = await response.json();
    setData(json);
    console.log(json);
  };

  useEffect(() => {
    FetchData();
    document.title = `(${state}) Emplyee Details`;
  }, [state]);
  return (
    <div>
      <h1>Data</h1>
      <button onClick={() => setState(state + 1)}>Increase {state}</button>
      {data.map((item) => (
        <div>
          <p>
            {item.id}){item.firstName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UseEffect1;
