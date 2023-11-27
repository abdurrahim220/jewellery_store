import { useEffect, useState } from "react";

const useProductData = () => {
  const [products, setFakeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`db.json`)
      .then((res) => res.json())
      .then((data) => {
        setFakeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // console.log(products);

  return [products, loading];
};

export default useProductData;
