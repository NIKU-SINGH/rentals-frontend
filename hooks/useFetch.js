import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // console.log("This is the url", url)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res?.data);
        console.log("Data is here",res.data)
      } catch (err) {
        setError(err)
        console.log("error is here", err)
      }
      setLoading(false)
    }
    fetchData();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err)
    }
  }

  return { data, loading, error, refetch }
};

export default useFetch