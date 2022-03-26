import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const request = await fetch(url);
    const response = await request.json();
    setData(response);
    console.log("work");
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return { data, loading };
};

export default useFetch;
