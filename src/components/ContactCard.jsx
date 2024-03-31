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
  toggleStar,
}) => {
  return (
    <Card
      style={{ margin: "20px", width: "22rem " }}
      className="contact-card"
      bg="light"
      border="info"
    >
      <Card.Img
        // style={{ display: "flex", justifyContent: "right" }}
        variant="top"
        src={contact.image ? contact.image : placeholderImage}
        className="card-avatar"
      />
      <Card.Body>
        <Card.Title>{contact.firstName + " " + contact.lastName}</Card.Title>
        <Card.Text>
          {contact.email ? `Email: ` : ""}
          {contact.email ? (
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          ) : (
            ""
          )}
          {contact.email && <br />}
          Phone: <a href={`tel:${contact.phoneNum}`}>{contact.phoneNum}</a>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "end" }}>
        <Button
          style={{ marginRight: "10px" }}
          variant="seconday"
          onClick={() => toggleStar(contact)}
          title={
            contact.starred ? "Remove from favourites" : "Add to favourites"
          }
        >
          {contact.starred ? <HeartFill /> : <Heart />}
        </Button>
        <Button
          style={{ marginRight: "10px" }}
          variant="light"
          onClick={() => handleCopy(contact)}
          title="Copy Contact"
        >
          <Copy />
        </Button>
        <Button
          style={{ marginRight: "10px" }}
          variant="secondary"
          onClick={() => handleUpdate(contact)}
          title="Edit Contact"
        >
          <PencilSquare />
        </Button>
        <Button
          title="Delete Contact"
          style={{ marginRight: "10px" }}
          variant="danger"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <Trash3 />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ContactCard;
