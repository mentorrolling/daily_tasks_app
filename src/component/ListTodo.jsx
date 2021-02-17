import React, { useEffect, useState } from "react";

import moment from "moment";

import "../css/todo.css";
import CountText from "./CountText";
import ModalTask from "./ModalTask";

export default function ListTodo({
  state,
  deleteTaskDone,
  toggle,
  handleUpdate,
}) {
  const newArray = state.filter((item) => {
    return moment(item.fecha).isSameOrBefore(moment().format());
  });
  const [count, setCount] = useState(0);
  const [tarea, setTarea] = useState({});
  const [fechita, setFechita] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    let tarea = state.filter((item) => item.id === id);
    setTarea(tarea[0]);
  };

  useEffect(() => {
    let cantidad = newArray.filter((item) => item.done === false);
    setCount(cantidad.length);
  }, [state]);

  useEffect(() => {
    setTarea({
      ...tarea,

      fecha: moment(fechita).format("L"),
    });
  }, [fechita]);

  const changeTarea = ({ target }) => {
    setTarea({
      ...tarea,
      [target.name]: target.value,
      fecha: moment(fechita).format("L"),
    });
  };

  const submitTarea = (e) => {
    e.preventDefault();
    console.log("Submit");
    handleUpdate(tarea);
  };
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
            // onClick={() => toggle(tarea.id)}
            // className="list-group-item"
            className={
              moment(tarea.fecha).isBefore(moment().format("L"))
                ? " list-group-item bg-warning"
                : "list-group-item"
            }
          >
            <span
              className={tarea.done === true ? "lheight tachado" : "lheight"}
              onClick={() => toggle(tarea.id)}
            >
              {tarea.done === true ? "✔" : "📌"}
              {tarea.tarea}
            </span>
            {tarea.done === false && (
              <span
                className=" float-right lheight"
                onClick={() => handleShow(tarea.id)}
              >
                <i
                  className="fa fa-pencil-square-o fa-lg"
                  aria-hidden="true"
                ></i>
              </span>
            )}
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
      <ModalTask
        show={show}
        handleClose={handleClose}
        tarea={tarea}
        fechita={fechita}
        setFechita={setFechita}
        submitTarea={submitTarea}
        changeTarea={changeTarea}
      />
    </>
  );
}
