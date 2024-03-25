import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalContactForm = ({ show, handleClose, addContact, newContact }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" accept="image/*" />
              </Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addContact}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContactForm;
