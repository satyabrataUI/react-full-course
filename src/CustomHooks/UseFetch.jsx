import { useState } from "react";
import { useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const FetchData = async () => {
    const response = await fetch(url);
    const Data = await response.json();
    setData(Data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return [data];
};

export default UseFetch;
