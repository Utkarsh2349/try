import React from "react";

export default function Details(props) {
  return <div>
    <h3>{props.data.name}</h3>
    <h3>{props.data.age}</h3>
  </div>;
}
