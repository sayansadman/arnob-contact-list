import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import MockContacts from "./MockContacts";
import AddContactToast from "./AddContactToast";

const Contact = () => {
  const sortedContacts = MockContacts.sort((a, b) => {
    return a.first_name.localeCompare(b.first_name);
  });

  const [contacts, setContacts] = useState(sortedContacts);
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactAddedToast, setShowContactAddedToast] = useState(false);

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    console.log(newContacts);
    newContacts.sort((a, b) => {
      return a.first_name.localeCompare(b.first_name);
    });
    setContacts(newContacts);
    setShowContactAddedToast(true);
  };

  const updateContact = (contact) => {
    const newContacts = contacts.map((c) => {
      return c.id === contact.id ? contact : c;
    });
    setContacts(newContacts);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone_num.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddContact addNewContact={addContact} />
      </div>
      <ContactList
        updateContact={updateContact}
        deleteContact={deleteContact}
        contacts={searchTerm === "" ? contacts : filteredContacts}
      />
      <AddContactToast
        showContactAddedToast={showContactAddedToast}
        setShowContactAddedToast={setShowContactAddedToast}
      />
    </div>
  );
};

export default Contact;
