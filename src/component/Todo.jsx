import React, { useState, useEffect, useReducer } from "react";
import { reducer } from "../helpers/functionReducer";
import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";

import { Form } from "react-bootstrap";
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
  const [show, setShow] = useState(false);
  const [switcher, setSwitcher] = useState(false);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    setFormValues({
      ...formValues,
      fecha: moment(startDate).format("L"),
    });
  }, [startDate]);

  useEffect(() => {
    if (switcher) {
      document.body.style = "background:black;";
    } else {
      document.body.style = "";
    }
  }, [switcher]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación si el campo del input está vacio
    if (formValues.tarea.trim().length <= 1) {
      return;
    }

    dispatch({ type: "add", payload: formValues });
    setShow(true);
    setFormValues({
      id: "",
      tarea: "",
      fecha: "",
      done: false,
    });
    setStartDate(new Date());

    setTimeout(() => {
      setShow(false);
    }, 1000);
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
  const handleUpdate = (tarea) => {
    dispatch({ type: "update", payload: tarea });
  };

  const toggle = (tareaID) => {
    dispatch({
      type: "toggle",
      payload: tareaID,
    });
  };

  const handleSwitch = () => {
    setSwitcher(!switcher);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <div className="card">
              <div className="col mt-3 ">
                <Form.Check
                  className="float-right"
                  type="switch"
                  id="custom-switch"
                  checked={switcher}
                  onChange={handleSwitch}
                />
              </div>
              <div className="card-body text-center pt-0">
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
                  show={show}
                />
              </div>
              <ListTodo
                state={state}
                toggle={toggle}
                deleteTaskDone={deleteTaskDone}
                startDate={startDate}
                setStartDate={setStartDate}
                handleUpdate={handleUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
