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
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="tarea"
            placeholder="Nueva tarea"
            autoComplete="off"
            maxLength="30"
            onChange={handleChange}
            value={formValues.tarea}
          />
        </div>
        <div className="form-group ">
          <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        {/* <button className="btn btn-info" type="submit">
          Agregar
        </button> */}
      </form>
    </>
  );
}
