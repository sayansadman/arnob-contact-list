import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalContactForm = ({
  show,
  handleClose,
  handleSave,
  children,
  handleReset,
  title,
}) => {
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleReset}>
            Clear
          </Button>
          <Button variant="success" onClick={handleSave}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContactForm;
