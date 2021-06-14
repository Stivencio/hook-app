import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          isMounted.current
            ? setState({ data, loading: false, error: null })
            : console.log("setState no se llamó");
        }, 2000);
      })
      .catch((e) => {
        setState({ data: null, loading: false, error: true });
        console.log(e);
      });
  }, [url]);

  return state;
};
