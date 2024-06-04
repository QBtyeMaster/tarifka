import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = URL => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(URL);
      const keys = Object.keys(responseData);
      const firstKey = keys[0];
      setData(responseData[firstKey]);
      setLoading(false);
    } catch (err) {
      setError(err.URL);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, data, error};
};
export default useFetch;
