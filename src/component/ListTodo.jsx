import React from "react";

import moment from "moment";

import "../css/todo.css";

export default function ListTodo({ state, handleDelete, toggle }) {
  const newArray = state.filter((item) => {
    return moment(item.fecha).isSameOrBefore(moment().format());
  });
  // console.log(newArray);
  return (
    <>
      <ul className="list-group list-group-flush">
        {newArray.map((tarea) => (
          <li
            key={tarea.id}
            onClick={() => toggle(tarea.id)}
            className={
              tarea.done === true
                ? " list-group-item tachado"
                : "list-group-item"
            }
          >
            {tarea.done === true ? "✔" : "📌"}
            {tarea.tarea}
            {/* <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(tarea.id);
              }}
            >
              borrar
            </button> */}
          </li>
        ))}
      </ul>
    </>
  );
}
