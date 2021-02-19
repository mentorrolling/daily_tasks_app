import React, { useContext } from "react";
import { SwitchContext } from "../helpers/SwitchContext";

export default function CountText({ count, state, deleteTaskDone }) {
  const { switcher } = useContext(SwitchContext);
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
