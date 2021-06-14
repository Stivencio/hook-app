import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/q`);
  console.log(state);

  return (
    <div>
      <h1>Multiple Custom Hooks!!!</h1>
    </div>
  );
};
