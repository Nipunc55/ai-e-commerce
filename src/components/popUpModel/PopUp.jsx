import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CheckoutModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Checkout Complete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your checkout was successful! Thank you for shopping with us.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutModal;
