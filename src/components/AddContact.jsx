import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import ModalContactForm from "./ModalContactForm";
const AddContact = ({ newContact }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <Plus />
        Add Contact
      </Button>
      <ModalContactForm
        newContact={newContact}
        show={showModal}
        handleClose={handleClose}
      />
    </div>
  );
};

export default AddContact;
