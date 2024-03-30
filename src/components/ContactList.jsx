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
import UpdateContactModal from "./UpdateContactModal";

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const [selectedContactID, setSelectedContactID] = useState();

  const handleDeleteClick = (contactId) => {
    setSelectedContactID(contactId);
    setShowModal(true);
  };

  const handleDelete = () => {
    deleteContact(selectedContactID);
    setShowModal(false);
  };

  const handleClose = () => setShowModal(false);

  const handleCopy = (contact) => {
    const name = contact.firstName + " " + contact.lastName;
    const email = contact.email;
    const phone = contact.phoneNum;
    var contactDetails = "Name: " + name + "\nPhone: " + phone;
    if (email !== "") {
      contactDetails += "\nEmail: " + email;
    }
    navigator.clipboard.writeText(contactDetails);
  };

  const handleUpdate = (contact) => {
    setSelectedContact(contact);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const toggleFavorite = (contact) => {
    const updatedContact = { ...contact, starred: !contact.starred };
    updateContact(updatedContact);
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
                <td>{contact.firstName + " " + contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNum}</td>
                <td>
                  <Button
                    style={{ marginRight: "15px" }}
                    variant="seconday"
                    onClick={() => toggleFavorite(contact)}
                  >
                    {contact.starred ? <HeartFill /> : <Heart />}
                  </Button>
                  <Button
                    style={{ marginRight: "15px" }}
                    variant="light"
                    onClick={() => handleCopy(contact)}
                  >
                    <Copy />
                  </Button>
                  <Button
                    style={{ marginRight: "15px" }}
                    variant="secondary"
                    onClick={() => handleUpdate(contact)}
                  >
                    <PencilSquare />
                  </Button>
                  <Button
                    style={{ marginRight: "15px" }}
                    variant="danger"
                    onClick={() => handleDeleteClick(contact.id)}
                  >
                    <Trash3 />
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
            handleUpdate={handleUpdate}
            toggleStar={toggleFavorite}
          />
        ))}
      </div>
      <UpdateContactModal
        show={showUpdateModal}
        selectedContact={selectedContact}
        handleClose={handleCloseUpdateModal}
        handleSubmit={updateContact}
      />
    </div>
  );
};

export default ContactList;
