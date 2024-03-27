import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  Copy,
  PencilSquare,
  Heart,
  HeartFill,
  Trash3,
} from "react-bootstrap-icons";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ContactCard from "./ContactCard";
import placeholderImage from "./placeholder-avatar.png";

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContactID, setSelectedContactID] = useState();

  const handleDeleteClick = (contactId) => {
    // console.log(contactId);
    setSelectedContactID(contactId);
    setShowModal(true);
  };

  const handleDelete = () => {
    deleteContact(selectedContactID);
    setShowModal(false);
  };

  const handleClose = () => setShowModal(false);

  const handleCopy = (contact) => {
    const contactDetails = `Name: ${contact.first_name} ${contact.last_name}
    \nEmail: ${contact.email}
    \nPhone: ${contact.phone_num}`;
    navigator.clipboard.writeText(contactDetails);
  };

  return (
    <div>
      <div className="pc">
        <Table bordered striped hover>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img
                    className="avatar"
                    alt="contact-avatar"
                    src={contact.image ? contact.image : placeholderImage}
                  />
                </td>
                <td>{contact.first_name + " " + contact.last_name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone_num}</td>
                <td>
                  <Button variant="light" onClick={() => handleCopy(contact)}>
                    <Copy />
                  </Button>
                  <Button variant="secondary">
                    <PencilSquare />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteClick(contact.id)}
                  >
                    <Trash3 />
                  </Button>
                  <Button variant="seconday">
                    {contact.starred ? <HeartFill /> : <Heart />}
                  </Button>
                </td>
              </tr>
            ))}
            <DeleteConfirmationModal
              showModal={showModal}
              handleClose={handleClose}
              handleDelete={handleDelete}
            />
          </tbody>
        </Table>
      </div>
      <div className="mobile" style={{ flexDirection: "column" }}>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            handleCopy={handleCopy}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
