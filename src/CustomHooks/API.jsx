import React from "react";
import UseFetch from "./UseFetch";
const API = () => {
  const [data] = UseFetch("https://fakestoreapi.com/products");
  return (
    <div>
      API
      {data.map((ele) => (
        <p>
          {ele.id}.{ele.title}
        </p>
      ))}
    </div>
  );
};

export default API;
