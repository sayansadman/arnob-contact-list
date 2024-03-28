import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  Copy,
  Heart,
  HeartFill,
  PencilSquare,
  Trash3,
} from "react-bootstrap-icons";
import placeholderImage from "./placeholder-avatar.png";

const ContactCard = ({
  contact,
  handleCopy,
  handleDeleteClick,
  handleUpdate,
}) => {
  return (
    <Card className="contact-card" bg="light" border="info">
      <Card.Img
        // style={{ display: "flex", justifyContent: "right" }}
        variant="top"
        src={contact.image ? contact.image : placeholderImage}
        className="card-avatar"
      />
      <Card.Body>
        <Card.Title>{contact.firstName + " " + contact.lastName}</Card.Title>
        <Card.Text>
          Email: {contact.email}
          <br />
          Phone: {contact.phoneNum}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "end" }}>
        <Button variant="seconday">
          {contact.starred ? <HeartFill /> : <Heart />}
        </Button>
        <Button variant="light" onClick={() => handleCopy(contact)}>
          <Copy />
        </Button>
        <Button variant="secondary" onClick={() => handleUpdate(contact)}>
          <PencilSquare />
        </Button>
        <Button variant="danger" onClick={() => handleDeleteClick(contact.id)}>
          <Trash3 />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ContactCard;
