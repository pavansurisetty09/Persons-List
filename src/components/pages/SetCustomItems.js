import React from "react";
import { Form } from "react-bootstrap";

function SetCustomItems({ setPersonsPerPage }) {
  const handleChange = (e) => {
    setPersonsPerPage(Number(e.target.value));
  };

  const numbers = [3, 4, 5, 6, 7, 8];

  return (
    <Form.Group className="custom__set">
      <Form.Label>Select Items</Form.Label>
      <Form.Control as="select" onChange={handleChange}>
        {numbers.map((number) => (
          <option value={number}>{number}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export default SetCustomItems;
