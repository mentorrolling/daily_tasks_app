import React from "react";
import "../css/todo.css";

export default function ListTodo({ state, handleDelete, toggle }) {
  return (
    <>
      <ul className="list-group list-group-flush">
        {state.map((tarea) => (
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
