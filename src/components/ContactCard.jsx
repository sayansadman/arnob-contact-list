import React from "react";
import { Button, Card } from "react-bootstrap";
import { Copy, PencilSquare, Trash3 } from "react-bootstrap-icons";

const ContactCard = ({ contact, handleCopy, handleDeleteClick }) => {
  return (
    <Card className="contact-card" bg="light" border="info">
      <Card.Img variant="top" src={contact.image} className="card-avatar" />
      <Card.Body>
        <Card.Title>{contact.first_name + " " + contact.last_name}</Card.Title>
        <Card.Text>
          Email: {contact.email}
          <br />
          Phone: {contact.phone_num}
        </Card.Text>

        <Button variant="light" onClick={() => handleCopy(contact)}>
          <Copy />
        </Button>
        <Button variant="secondary">
          <PencilSquare />
        </Button>
        <Button
          variant="danger"
          onClick={() => handleDeleteClick(contact.index)}
        >
          <Trash3 />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
