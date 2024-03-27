import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteConfirmationModal = ({ showModal, handleClose, handleDelete }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "white" }}>
        Are you sure you want to delete this contact?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          No
        </Button>
        <Button variant="danger" onClick={() => handleDelete()}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
