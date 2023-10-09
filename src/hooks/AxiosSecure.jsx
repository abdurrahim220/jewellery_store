import axios from 'axios';
import React from 'react'

const AxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: `http://localhost:5001/`,
      });
  return [axiosSecure]
}

export default AxiosSecure