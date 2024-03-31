import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import MockContacts from "./MockContacts";
import { ToastContainer, Zoom, toast } from "react-toastify";
import { Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const sortedContacts = MockContacts.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName);
  });

  const [contacts, setContacts] = useState(sortedContacts);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFav, setShowFav] = useState(false);

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  }, []);

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    console.log(newContacts);
    newContacts.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    toast.success("New contact added successfully!");
  };

  const updateContact = (contact) => {
    const newContacts = contacts.map((c) => {
      return c.id === contact.id ? contact : c;
    });
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    toast.info("A contact has been updated!");
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    toast.warning("A contact has been deleted!");
  };

  const copyContact = () => {
    toast.info("Contact copied to clipboard!");
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phoneNum.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const favContacts = contacts.filter((contact) => {
    return contact.starred;
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddContact className="add-contact-btn" addNewContact={addContact} />
      </div>
      <br />
      <Button
        style={{ width: "170px", marginBottom: "10px" }}
        variant="dark"
        onClick={() => setShowFav(!showFav)}
      >
        {showFav ? "Show All Contacts" : "Show Favourites"}
      </Button>
      <br />
      <ContactList
        copyToast={() => copyContact()}
        updateContact={updateContact}
        deleteContact={deleteContact}
        contacts={
          searchTerm === ""
            ? showFav
              ? favContacts
              : contacts
            : filteredContacts
        }
      />

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        transition={Zoom}
        theme="dark"
      />
    </div>
  );
};

export default Contact;
