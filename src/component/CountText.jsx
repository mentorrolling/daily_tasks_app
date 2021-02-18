import React from "react";

export default function CountText({ count, state, deleteTaskDone, switcher }) {
  return (
    <>
      <p className="card-text text-center ">
        Tareas pendientes <b>{count}</b> de <b>{state.length}</b>
        <button
          className={
            switcher
              ? "btn btn-outline-danger pt-0 ml-3"
              : "btn btn-danger pt-0 ml-3"
          }
          onClick={deleteTaskDone}
        >
          x
        </button>
      </p>
    </>
  );
}
