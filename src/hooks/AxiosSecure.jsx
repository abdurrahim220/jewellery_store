import axios from 'axios';
import React from 'react'

const AxiosSecure = () => {
    const baseUrl = axios.create({
        baseURL: `http://localhost:5001/`,
      });
  return [baseUrl]
}
export default AxiosSecure