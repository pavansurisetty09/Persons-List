import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PersonItem() {
  return (
    // <div
    //   style={{
    //     display: "grid",
    //     gridTemplateColumns: "repeat(2, 0.5fr)",
    //   }}
    // >
    //   <button style={{ background: "green" }}>Edit</button>{" "}
    //   <button style={{ background: "red" }}>Delete</button>
    // </div>
    <>
      <Button type="submit">Button</Button>{" "}
      <Button as="input" type="reset" value="Reset" />
    </>
  );
}

export default PersonItem;
