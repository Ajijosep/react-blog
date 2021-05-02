import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [showloading, setShowloading] = useState(true);
  const [errormsg, setErrormsg] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            setShowloading(false);
            throw Error("Connected to endpoint, but could not fetch data!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setShowloading(false);
          setErrormsg(false);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setShowloading(false);
            setErrormsg(err.message);
          }
        });
    }, 0);
    return () => abortCont.abort();
  }, [url]);

  return { data, showloading, errormsg };
};

export default useFetch;
