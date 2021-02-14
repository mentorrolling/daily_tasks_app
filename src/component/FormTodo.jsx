import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function FormTodo({
  formValues,
  handleChange,
  handleSubmit,
  startDate,
  setStartDate,
}) {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-2">
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
        <div className="input-group ">
          <DatePicker
            className="form-control "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div></div>
      </form>
    </>
  );
}
