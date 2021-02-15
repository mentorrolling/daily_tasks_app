import React, { useState, useEffect, useReducer } from "react";
import { reducer } from "../helpers/functionReducer";
import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";
import Logo from "../img/pushpin.png";

import moment from "moment";
function init() {
  return JSON.parse(localStorage.getItem("tareas")) || [];
}

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, [], init);

  const [formValues, setFormValues] = useState({
    id: "",
    tarea: "",
    fecha: "",
    done: false,
  });
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    setFormValues({
      ...formValues,
      fecha: moment(startDate).format("L"),
    });
  }, [startDate]);

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
      fecha: "",
      done: false,
    });
    setStartDate(new Date());
  };

  const handleChange = ({ target }) => {
    setFormValues({
      id: new Date().getTime(),
      [target.name]: target.value,
      fecha: moment(startDate).format("L"),
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
                <h1 className="card-title">
                  <img className="pb-2" src={Logo} alt="Logo" />
                  TasksApp
                </h1>
                <FormTodo
                  handleChange={handleChange}
                  formValues={formValues}
                  handleSubmit={handleSubmit}
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </div>
              <ListTodo
                state={state}
                toggle={toggle}
                deleteTaskDone={deleteTaskDone}
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
