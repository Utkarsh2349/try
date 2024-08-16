import React from "react";
import Details from "./Details";
import Navbar from "./components/Navbar";
const Demo = () => {
  var marks = 80;
  const people = ["Utkarsh", "Wife", "Dog"];
  const data={
    'name':'Utkarsh',
    'age':29
  }
  return (
    <div>
      <Navbar/>
      {(() => {
        if (marks > 70) return <h1>First</h1>;
      })()}

      <ul>
        {(() =>
          people.map((item, i) => {
            return <li key={i.toString()}>{item}</li>;
          }))()}
      </ul>
      <ul>
        {
          people.map((item)=>{
            return <li>{item}</li>
          })
        }
      </ul>
      <Details data={data}/>
    </div>
  );
};

export default Demo;
