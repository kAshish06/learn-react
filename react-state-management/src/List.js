import React from "react";

let List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
