import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import ModalContactForm from "./ModalContactForm";
import { v4 as uuidv4 } from "uuid";

const AddContact = ({ addNewContact }) => {
  const [showModal, setShowModal] = useState(false);

  const [contact, setContact] = useState({});

  const handleSave = (event) => {
    event.preventDefault();
    // console.log(contact);
    const contactWithId = { ...contact, id: uuidv4() };
    addNewContact(contactWithId);
    handleClose();
  };

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    switch (event.target.name) {
      case "first_name":
        setContact({
          ...contact,
          first_name: event.target.value,
        });
        break;
      case "last_name":
        setContact({
          ...contact,
          last_name: event.target.value,
        });
        break;
      case "phone_num":
        setContact({
          ...contact,
          phone_num: event.target.value,
        });
        break;
      case "email":
        setContact({
          ...contact,
          email: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleReset = () => {};

  const handleShow = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        <Plus fontSize={"x-large"} style={{marginBottom: "4px"}} />
        Add Contact
      </Button>
      <ModalContactForm
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSave}
        handleReset={handleReset}
      >
        <Form>
          <Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                className={"image-input"}
                value={contact.image}
                type="file"
                accept="image/*"
              />
            </Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="first_name"
              className={"first-name"}
              onChange={handleChange}
              value={contact.first_name}
              type="text"
              placeholder="Enter first name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last_name"
              className={"last-name"}
              onChange={handleChange}
              value={contact.last_name}
              type="text"
              placeholder="Enter last name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phone_num"
              className={"phone-num"}
              onChange={handleChange}
              value={contact.phone_num}
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
      </ModalContactForm>
    </div>
  );
};

export default AddContact;
