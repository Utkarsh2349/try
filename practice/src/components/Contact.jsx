import React, { useRef, useState } from "react";
import Navbar from "./Navbar";

export default function Contact() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const change = (event) => {
    setItem(event.target.value);
  };
  const save = () => {
    console.log(list);
    list.push(item);
    setList([...list]);
  };
  const remove = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  // const [data, setData] = useState({
  //   data1: "Name",
  //   data2: "Age",
  // });
  // const change = () => {
  //   console.log(data);
  //   setData({ data1: "Utkarsh", data2: "23" });
  // };

  // let fname = useRef();
  // let lname = useRef();
  // const change = () => {
  //   let FirstName = fname.current.value;
  //   let LastName = lname.current.value;
  //   fname.current.classList.remove("text-success");
  //   fname.current.classList.add("text-danger");
  //   alert(FirstName + " " + LastName);
  // };
  return (
    <div>
      <Navbar />
      {/* <input
        className="text-success"
        ref={fname}
        placeholder="First Name"
        type="text"
      />
      <input ref={lname} placeholder="Last Name" type="text" />
      <button onClick={change}>Submit</button> */}
      {/* <h1>{data.data1}</h1>
      <h1>{data.data2}</h1>
      <button onClick={change}>Get value</button> */}
      <h3>{item}</h3>
      <h3>{list.length}</h3>
      <ul>
        {list.length !== 0 &&
          list.map((item, index) => {
            return (
              <li>
                {item} <button onClick={() => remove(index)}>Remove</button>
              </li>
            );
          })}
      </ul>
      <input type="text" onChange={(event) => change(event)} />
      <button onClick={save}>Save</button>
    </div>
  );
}
