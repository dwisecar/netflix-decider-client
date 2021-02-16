import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const NavBar = ({
  setGenre,
  movieGenres,
  showGenres,
  signIn,
  signUp,
  user,
  signOut,
}) => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">NOTFLIX</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/favorites">
            <Nav.Link>Favorites</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Movies">
            {movieGenres.map((genre) => (
              <LinkContainer to={`/movies/${genre.toLowerCase()}`}>
                <NavDropdown.Item onClick={() => setGenre(genre)}>
                  {genre}
                </NavDropdown.Item>
              </LinkContainer>
            ))}
          </NavDropdown>
          <NavDropdown title="TV">
            {showGenres.map((genre) => (
              <LinkContainer to={`/tv_shows/${genre.toLowerCase()}`}>
                <NavDropdown.Item onClick={() => setGenre(genre)}>
                  {genre}
                </NavDropdown.Item>
              </LinkContainer>
            ))}
          </NavDropdown>
          {user ? (
            <Nav.Link title="Sign Out" onClick={signOut}>
              Sign Out
            </Nav.Link>
          ) : (
            <>
              <NavDropdown title="Sign In">
                <SignIn signIn={signIn} />
              </NavDropdown>
              <NavDropdown title="Sign Up">
                <SignUp signUp={signUp} />
              </NavDropdown>
            </>
          )}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
