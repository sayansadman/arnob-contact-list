import React from "react";
import { Button, Card } from "react-bootstrap";
import { Copy, Trash3 } from "react-bootstrap-icons";

const ContactCard = (contact, handleCopy, handleDeleteClick) => {
  return (
    <Card style={{}}>
      <Card.Img variant="top" src={contact.image} />
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
        {/* <Button variant="secondary">
                    <PencilSquare /> 
                </Button> */}
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
