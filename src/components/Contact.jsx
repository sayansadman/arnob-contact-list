import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import MockContacts from "./MockContacts";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const sortedContacts = MockContacts.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName);
  });

  const [contacts, setContacts] = useState(sortedContacts);
  const [searchTerm, setSearchTerm] = useState("");
  // const [showContactAddedToast, setShowContactAddedToast] = useState(false);

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    console.log(newContacts);
    newContacts.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
    setContacts(newContacts);
    toast.success("Contact added successfully!");
  };

  const updateContact = (contact) => {
    const newContacts = contacts.map((c) => {
      return c.id === contact.id ? contact : c;
    });
    setContacts(newContacts);
    toast.info("A contact has been updated!");
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    toast.warning("A contact has been deleted!");
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phoneNum.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddContact className="add-contact-btn" addNewContact={addContact} />
      </div>
      <ContactList
        updateContact={updateContact}
        deleteContact={deleteContact}
        contacts={searchTerm === "" ? contacts : filteredContacts}
      />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Zoom}
        theme="dark"
      />
    </div>
  );
};

export default Contact;
