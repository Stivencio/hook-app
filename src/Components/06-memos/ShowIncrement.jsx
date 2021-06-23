import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volví a generar :c");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
