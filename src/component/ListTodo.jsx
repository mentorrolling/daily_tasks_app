import React, { useEffect, useState } from "react";

import moment from "moment";

import "../css/todo.css";
import CountText from "./CountText";

export default function ListTodo({ state, deleteTaskDone, toggle }) {
  const newArray = state.filter((item) => {
    return moment(item.fecha).isSameOrBefore(moment().format());
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cantidad = newArray.filter((item) => item.done === false);
    setCount(cantidad.length);
  }, [state]);

  return (
    <>
      <CountText
        count={count}
        state={newArray}
        deleteTaskDone={deleteTaskDone}
      />
      <ul className="list-group list-group-flush">
        {newArray.map((tarea) => (
          <li
            key={tarea.id}
            onClick={() => toggle(tarea.id)}
            // className="list-group-item"
            className={
              moment(tarea.fecha).isBefore(moment().format("L"))
                ? " list-group-item bg-warning"
                : "list-group-item"
            }
          >
            <span className={tarea.done === true ? "tachado" : ""}>
              {tarea.done === true ? "✔" : "📌"}
              {tarea.tarea}
            </span>
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
