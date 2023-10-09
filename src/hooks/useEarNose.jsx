import AxiosSecure from "./AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEarNose = () => {
  const [baseUrl] = AxiosSecure();

  const { data:products=[],isLoading: loading,  } = useQuery({
    queryKey: ["products"],
    queryFn: () => baseUrl.get(`earNose`).then((res) => res.data),
  });
  return [products, loading];
};

export default useEarNose;
