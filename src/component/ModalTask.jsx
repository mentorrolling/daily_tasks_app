import React, { useEffect, useContext } from "react";
import { SwitchContext } from "../helpers/SwitchContext";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

export default function ModalTask({
  show,
  handleClose,
  tarea,
  changeTarea,
  submitTarea,
  setFechita,
}) {
  useEffect(() => {
    setFechita(moment(tarea.fecha).format("YYYY MM DD"));
  }, []);

  const { switcher } = useContext(SwitchContext);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tarea</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitTarea}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Detalle</Form.Label>
              <Form.Control
                type="text"
                name="tarea"
                value={tarea.tarea}
                onChange={changeTarea}
                maxLength="10"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <DatePicker
                className="form-control "
                name="fecha"
                selected={new Date(tarea.fecha)}
                //onChange={changeTarea}
                onChange={(date) => setFechita(date)}
                type="date"
              />
              {/* <Form.Control
                type="text"
                value={moment(tarea.fecha).format("YYYY MM DD")}
              /> */}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant={switcher ? "outline-secondary" : "secondary"}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant={switcher ? "outline-info" : "info"}
              type="submit"
              onClick={handleClose}
            >
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
