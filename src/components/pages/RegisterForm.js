import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addPerson,
  clearCurrent,
  updatePerson,
  closeModal,
} from "../../actions/personAction";

function RegisterForm({
  clearCurrent,
  closeModal,
  current,
  addPerson,
  updatePerson,
}) {
  // Initialstate of Person
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  // Validation

  const validation = () => {
    setError({
      firstName: person.firstName === "",
      lastName: person.lastName === "",
      age: person.age === "",
      gender: person.gender === "",
    });

    return (
      person.firstName !== "" &&
      person.lastName !== "" &&
      person.age !== "" &&
      person.gender !== ""
    );
  };

  // Set Current

  useEffect(() => {
    if (current !== null) {
      setPerson(current);
    } else {
      setPerson({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
      });
    }
  }, [current]);

  // OnChange Event

  const onChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  // New Person Registration Submission to Server

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      if (current === null) {
        addPerson(person);
      } else {
        await updatePerson(person);
      }
      clearCurrent();
      setError({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
      });
    }
  };
  // FormSubmit Event function

  const formSubmit = (e) => {
    e.preventDefault();
    registerSubmit(e);
    setPerson({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    });
    closeModal();
  };

  const clearHandler = () => {
    clearCurrent();
  };

  // Destructuring person data

  const { firstName, lastName, age, gender } = person;

  return (
    <div>
      <Form className="form">
        <Form.Row>
          <Form.Group as={Col}>
            <Col sm={7}>
              <Form.Label>First Name</Form.Label>
            </Col>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                onChange={onChange}
                required
              />
            </Col>
            <div style={{ color: "red" }}>
              {error.firstName !== "" ? "Required First Name" : ""}
            </div>
          </Form.Group>

          <Form.Group as={Col}>
            <Col sm={7}>
              <Form.Label>Last Name</Form.Label>
            </Col>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                onChange={onChange}
                required
              />
              <div style={{ color: "red" }}>
                {error.firstName !== "" ? "Required Last Name" : ""}
              </div>
            </Col>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group style={{ marginLeft: "5px" }}>
            <Form.Label column sm={2}>
              Age
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                name="age"
                value={age}
                onChange={onChange}
                required
              />
            </Col>
            <div style={{ color: "red" }}>
              {error.age !== "" ? "Required age" : ""}
            </div>
          </Form.Group>

          <Form.Group style={{ marginLeft: "50px" }}>
            <Form.Label as="legend">Gender</Form.Label>
            <Col sm={20}>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={onChange}
                required
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={onChange}
                required
              />
            </Col>
            <div style={{ color: "red" }}>
              {error.gender !== "" ? "Required gender" : ""}
            </div>
          </Form.Group>
        </Form.Row>
      </Form>
      <Form.Group as={Row}>
        <Col>
          <Button type="submit" onClick={formSubmit}>
            {current ? "Update" : "Add Contact"}
          </Button>
          <Button
            onClick={clearHandler}
            style={{ marginLeft: "10px" }}
            type="update"
          >
            Clear
          </Button>
        </Col>
      </Form.Group>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentPerson: state.person.currentPerson,
  current: state.person.current,
  ModalShow: state.person.show,
});

export default connect(mapStateToProps, {
  addPerson,
  updatePerson,
  clearCurrent,
  closeModal,
})(RegisterForm);
