import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PersonItem() {
  return (
    <>
      <Button type="submit">Button</Button>{" "}
      <Button as="input" type="reset" value="Reset" />
    </>
  );
}

export default PersonItem;
