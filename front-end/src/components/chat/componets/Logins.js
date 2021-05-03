import React, { useRef } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Logins({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  }

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button
          type="submit"
          className="mr-2"
          style={{ backgroundColor: "#00AFB9" }}
        >
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Create A New Id
        </Button>
      </Form>
    </Container>
  );
}
