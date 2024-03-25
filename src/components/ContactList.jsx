import React from "react";
import { Button, Table } from "react-bootstrap";
import { Copy, PencilSquare, Trash3 } from "react-bootstrap-icons";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <div className="pc">
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
                    src={
                      contact.image ? contact.image : "./placeholder-avatar.png"
                    }
                  />
                </td>
                <td>{contact.first_name + " " + contact.last_name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone_num}</td>
                <td>
                  <Button variant="light">
                    <Copy />
                  </Button>
                  <Button variant="secondary">
                    <PencilSquare />
                  </Button>
                  <Button variant="danger">
                    <Trash3 />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mobile"></div>
    </div>
  );
};

export default ContactList;
