import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useState, useEffect } from "react";
function Loader() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const FetchData = async () => {
    setLoader(true);
    const response = await fetch(
      "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
    );
    const Data = await response.json();
    setData(Data);
    setLoader(false);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      <h2>Loader</h2>

      {loader ? <TailSpin /> : data.map((item) => <p>{item.email}</p>)}
    </div>
  );
}

export default Loader;
