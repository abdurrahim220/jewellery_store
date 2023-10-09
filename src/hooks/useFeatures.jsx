import React, { useEffect, useState } from 'react'
import AxiosSecure from './AxiosSecure';

const useFeatures = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [baseUrl] = AxiosSecure()
  
    useEffect(() => {
      baseUrl.get(`features`)
        .then((res) => res.data)
        .then((data) => {
          setProducts(data);
          setLoading(true);
        });
    },[]);
    return [products, loading];
}

export default useFeatures