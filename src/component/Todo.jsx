import React, { useState, useEffect, useReducer } from "react";
import { reducer } from "../helpers/functionReducer";
import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";
function init() {
  return JSON.parse(localStorage.getItem("tareas")) || [];
}

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, [], init);
  const [formValues, setFormValues] = useState({
    id: "",
    tarea: "",
    done: false,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(state));
    // handleCount();
    let cantidad = state.filter((item) => item.done === false);
    setCount(cantidad.length);
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación si el campo del input está vacio
    if (formValues.tarea.trim().length <= 1) {
      return;
    }

    dispatch({ type: "add", payload: formValues });
    setFormValues({
      id: "",
      tarea: "",
      done: false,
    });
  };

  const handleChange = ({ target }) => {
    setFormValues({
      id: new Date().getTime(),
      [target.name]: target.value,
      done: false,
    });
  };

  const deleteTaskDone = () => {
    dispatch({ type: "deleteTasks" });
  };

  const handleDelete = (tareaID) => {
    dispatch({ type: "delete", payload: tareaID });
  };

  const toggle = (tareaID) => {
    dispatch({
      type: "toggle",
      payload: tareaID,
    });
  };
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <div className="card">
              <div className="card-body text-center">
                <h1 className="card-title">📌TasksApp</h1>
                <FormTodo
                  handleChange={handleChange}
                  formValues={formValues}
                  handleSubmit={handleSubmit}
                />
                <p className="card-text text-center mt-3">
                  Tareas pendientes <b>{count}</b> de <b>{state.length}</b>
                  <button
                    className="btn btn-danger pt-0 ml-3"
                    onClick={deleteTaskDone}
                  >
                    x
                  </button>
                </p>
              </div>
              <ListTodo
                state={state}
                toggle={toggle}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>📌TasksApp</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <FormTodo
              handleChange={handleChange}
              formValues={formValues}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col text-center">
            <span>
              Tareas pendientes {count} de {state.length}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ListTodo
              state={state}
              toggle={toggle}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
