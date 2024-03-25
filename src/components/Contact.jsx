import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import MockContacts from "./MockContacts";

const Contact = () => {
  const [contacts, setContacts] = useState(MockContacts);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <SearchBar />
        <AddContact />
      </div>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contact;
