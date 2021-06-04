import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./RegisterForm";
import {
  showModal,
  closeModal,
  clearCurrent,
} from "../../actions/personAction";

function AddPersonModal({ modalShow, showModal, closeModal, clearCurrent }) {
  const handleShow = () => {
    showModal();
  };

  const closeHandler = () => {
    closeModal();
    clearCurrent();
  };

  return (
    <Fragment>
      <div className="center">
        <Button onClick={handleShow}>Add Person</Button>
      </div>

      <Modal className="modal-bg" show={modalShow} onHide={() => closeModal()}>
        <Modal.Header closeButton>Register a new Person</Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeHandler} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  modalShow: state.person.show,
  current: state.person.current,
});

export default connect(mapStateToProps, {
  showModal,
  closeModal,
  clearCurrent,
})(AddPersonModal);
