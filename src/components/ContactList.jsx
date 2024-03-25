import React from "react";
import { Button, Table } from "react-bootstrap";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <Table bordered>
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
                  src={contact.image}
                />
              </td>
              <td>{contact.first_name + " " + contact.last_name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone_num}</td>
              <td>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="success">Copy</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactList;
