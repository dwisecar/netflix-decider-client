import React from "react";
import { Form, Button } from "react-bootstrap";
const signUp = ({ signUp }) => {
  return (
    <Form onSubmit={signUp} style={{ padding: "5px" }}>
      <h2>Sign Up</h2>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="username"
          placeholder="Enter username"
          className="nav-search"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          className="nav-search"
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default signUp;
