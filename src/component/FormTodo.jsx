import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../css/form.css";

export default function FormTodo({
  formValues,
  handleChange,
  handleSubmit,
  startDate,
  setStartDate,
  show,
}) {
  useEffect(() => {}, [startDate]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-2 ">
          <input
            className="form-control"
            type="text"
            name="tarea"
            placeholder="Nueva tarea..."
            autoComplete="off"
            maxLength="30"
            onChange={handleChange}
            value={formValues.tarea}
            required
          />
          <div className="input-group-append">
            <button className="btn btn-outline-info" type="submit">
              +
            </button>
          </div>
        </div>

        <div className="input-group mb-2">
          <DatePicker
            className="form-control "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        {show && (
          <div className="alert alert-primary" role="alert">
            Success!
          </div>
        )}
      </form>
    </>
  );
}
