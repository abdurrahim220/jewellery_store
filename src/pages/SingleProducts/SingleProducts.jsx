import React from "react";
import { BsUiChecksGrid } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const SingleProducts = () => {
  const data = useLoaderData();

  console.log(data);
  return <div>SingleProducts {data.availability}</div>;
};

export default SingleProducts;
