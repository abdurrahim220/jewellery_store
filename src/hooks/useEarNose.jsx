import axios from "axios";
import React, { useEffect, useState } from "react";
import AxiosSecure from "./AxiosSecure";



const useEarNose = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [axiosSecure] = AxiosSecure()

  useEffect(() => {
    axiosSecure.get(`earNose`)
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
        setLoading(true);
      });
  }, [loading]);
  return [products, loading];
};

export default useEarNose;
