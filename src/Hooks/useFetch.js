import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({ data, loading: false, error: null });
      })
      .catch((e) => {
        setState({ ...state, loading: false, error: true });
        console.log(e);
      });
  }, [url]);

  return state;
};
