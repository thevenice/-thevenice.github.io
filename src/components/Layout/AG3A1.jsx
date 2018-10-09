import React from "react";

const AG3A1 = ({ iknow }) => {
  console.log(iknow);
  return (
    <div className="AG3A1">
      {iknow.map(item => (
        <div className="AG3A1_child" key={item.h2}>
          <h4>{item.name}</h4>
          <h1>{item.h2}</h1>
          <p>{item.p}</p>
        </div>
      ))}
    </div>
  );
};

export default AG3A1;
