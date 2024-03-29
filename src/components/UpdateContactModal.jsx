import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const UpdateContactModal = ({
  show,
  selectedContact,
  handleSubmit,
  handleClose,
}) => {
  const [contact, setContact] = useState({});
  //   console.log(contact);
  //   console.log(selectedContact);

  useEffect(() => {
    setContact(selectedContact);
  }, [selectedContact]);

  const handleChange = (event) => {
    // console.log(event.target.value, event.target.name);
    switch (event.target.name) {
      case "firstName":
        setContact({
          ...contact,
          firstName: event.target.value,
        });
        break;
      case "lastName":
        setContact({
          ...contact,
          lastName: event.target.value,
        });
        break;
      case "phoneNum":
        setContact({
          ...contact,
          phoneNum: event.target.value,
        });
        break;
      case "email":
        setContact({
          ...contact,
          email: event.target.value,
        });
        break;
      case "image":
        setContact({
          ...contact,
          image: event.target.value,
        });
        break;
      default:
        break;
    }
  };
  //   console.log(contact);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                className={"image-input"}
                value={contact.image}
                type="file"
                accept="image/*"
              />
            </Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              className={"first-name"}
              onChange={handleChange}
              //   defaultValue={contact.firstName}
              value={contact.firstName}
              type="text"
              placeholder="Enter first name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              className={"last-name"}
              onChange={handleChange}
              value={contact.lastName}
              type="text"
              placeholder="Enter last name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNum"
              className={"phone-num"}
              onChange={handleChange}
              value={contact.phoneNum}
              type="text"
              placeholder="Enter phone number"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              className={"email"}
              onChange={handleChange}
              value={contact.email}
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => handleClose()}>
          Close
        </Button>
        <Button
          variant="success"
          onClick={() => {
            handleClose();
            handleSubmit(contact);
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateContactModal;
