import React from "react";
import { Form, Button } from "react-bootstrap";
const signIn = ({ signIn }) => {
  return (
    <Form onSubmit={signIn}>
      <h2>Sign In</h2>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="username"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default signIn;
