import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import MockContacts from "./MockContacts";

const Contact = () => {
  const sortedContacts = MockContacts.sort((a, b) => {
    return a.first_name.localeCompare(b.first_name);
  });
  const [contacts, setContacts] = useState(sortedContacts);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      //   contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone_num.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddContact />
      </div>
      <ContactList contacts={searchTerm === "" ? contacts : filteredContacts} />
    </div>
  );
};

export default Contact;
