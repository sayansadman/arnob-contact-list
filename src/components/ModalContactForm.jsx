import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalContactForm = ({
  show,
  handleClose,
  handleSave,
  children,
  handleReset,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="success" onClick={handleSave}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContactForm;
