import React from "react";

export default function FormTodo({ formValues, handleChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        {/* <button className="btn btn-info" type="submit">
          Agregar
        </button> */}
      </form>
    </>
  );
}
