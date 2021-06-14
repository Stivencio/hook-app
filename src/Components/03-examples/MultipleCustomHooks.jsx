import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {error && <div className="alert alert-danger text-center">Error</div>}
      {loading && (
        <div className="text-center">
          <div className="lds-dual-ring"></div>
        </div>
        // <div className="alert alert-info text-center">Loading...</div>
      )}

      <blockquote className="blockquote text-end">
        <p className="mb-0">{quote}</p>
        <br />
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente frase
      </button>
    </div>
  );
};
