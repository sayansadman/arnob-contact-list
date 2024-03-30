import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import ModalContactForm from "./ModalContactForm";
import { v4 as uuidv4 } from "uuid";

const AddContact = ({ addNewContact, className }) => {
  const [showModal, setShowModal] = useState(false);

  const [contact, setContact] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    image: "",
    starred: false,
  });

  const handleSave = (event) => {
    event.preventDefault();
    if (!contact.firstName) {
      alert("First Name is required!");
      return;
    }
    if (!contact.lastName) {
      alert("Last Name is required!");
      return;
    }
    if (!/^\d*$/.test(contact.phoneNum)) {
      alert("Phone Number required and must be digits only!");
      return;
    }
    addNewContact(contact);
    handleReset();
    handleClose();
  };

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
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

  const handleReset = () => {
    setContact({
      id: uuidv4(),
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      image: "",
      starred: false,
    });
  };

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    handleReset();
    setShowModal(false);
  };

  return (
    <div className={className}>
      <Button variant="info" onClick={handleShow}>
        <Plus fontSize={"x-large"} style={{ marginBottom: "4px" }} />
        Add Contact
      </Button>
      <ModalContactForm
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSave}
        handleReset={handleReset}
        title="Add Contact"
      >
        <Form>
          <Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                className={"image-input"}
                value={contact.image}
                type="text"
                placeholder="Enter image URL"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              name="firstName"
              className={"first-name"}
              onChange={handleChange}
              value={contact.firstName}
              type="text"
              placeholder="Enter first name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
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
              required
              pattern="\d*"
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
      </ModalContactForm>
    </div>
  );
};

export default AddContact;
