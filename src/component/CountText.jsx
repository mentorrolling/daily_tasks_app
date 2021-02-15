import React from "react";

export default function CountText({ count, state, deleteTaskDone }) {
  return (
    <>
      <p className="card-text text-center ">
        Tareas pendientes <b>{count}</b> de <b>{state.length}</b>
        <button className="btn btn-danger pt-0 ml-3" onClick={deleteTaskDone}>
          x
        </button>
      </p>
    </>
  );
}
