import React from "react";

function List(props) {
  return (
    <ul>
      {props.todo.map((item, index) => (
        <li key={index}> {item} </li>
      ))}
    </ul>
  );
}

export default List;
