import React from "react";
export default function Content(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </>
  );
}
