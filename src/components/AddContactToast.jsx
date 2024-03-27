import { Toast } from "react-bootstrap";

const AddContactToast = ({ showContactAddedToast, handleClose }) => {
  return (
    <Toast
      onClose={handleClose}
      show={showContactAddedToast}
      delay={3000}
      autohide
      style={{
        position: "bottom-right",
        top: 0,
        right: 0,
      }}
    >
      <Toast.Header>
        <strong className="mr-auto">Toast Message</strong>
      </Toast.Header>
      <Toast.Body>Contact added successfully!</Toast.Body>
    </Toast>
  );
};
export default AddContactToast;
