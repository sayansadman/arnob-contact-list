import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Copy, Trash3 } from "react-bootstrap-icons";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const handleDeleteClick = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleDelete = () => {
    deleteContact(selectedContact);
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
              <tr key={contact.index}>
                <td>
                  <img
                    className="avatar"
                    alt="contact-avatar"
                    src={
                      contact.image ? contact.image : "./placeholder-avatar.png"
                    }
                  />
                </td>
                <td>{contact.first_name + " " + contact.last_name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone_num}</td>
                <td>
                  <Button variant="light" onClick={() => handleCopy(contact)}>
                    <Copy />
                  </Button>
                  {/* <Button variant="secondary">
                    <PencilSquare /> 
                   </Button> */}
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteClick(contact.index)}
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
      <div className="mobile">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.index}
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
