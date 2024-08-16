import React, { useRef } from "react";
import Navbar from "./Navbar";
import { json } from "react-router-dom";

function About(props) {
  let data = useRef(null);
  let myPTag = useRef();
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    data.current = await response.json();
  };
  const showData = () => {
    myPTag.current.innerText = JSON.stringify(data);
  };

  // const change = () => {
  //   p.current.src = "https://placehold.co/600x400/000000/FFF";
  // };
  return (
    <div>
      <Navbar />
      {/* <p ref={p}> This is About</p> */}
      {/* <img ref={p} src="https://placehold.co/600x400" alt="" />
      <button onClick={change}>Click me</button> */}
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Load data</button>
      <button onClick={showData}>Show data</button>
    </div>
  );
}

export default About;
