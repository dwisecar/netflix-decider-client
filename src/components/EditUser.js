import React from "react";
import { Form, Button } from "react-bootstrap";
const editUser = ({ handleEdit, user }) => {
  return (
    <Form onSubmit={handleEdit}>
      <h2>Edit Username</h2>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="username"
          defaultValue={user.username}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};
export default editUser;
