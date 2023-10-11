import AxiosSecure from "./AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useProductData = () => {
  const [baseUrl] = AxiosSecure();

  const { data:products=[],isLoading: loading,  } = useQuery({
    queryKey: ["products"],
    queryFn: () => baseUrl.get(`products`).then((res) => res.data),
  });
  // console.log(products)
  return [products, loading];
};

export default useProductData;
