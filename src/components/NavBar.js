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
import EditUser from "./EditUser";
import { useHistory } from "react-router-dom";
import { GoSearch } from "react-icons/go";
const NavBar = ({
  setGenre,
  movieGenres,
  showGenres,
  signIn,
  signUp,
  user,
  signOut,
  handleEdit,
  handleSearch,
}) => {
  let history = useHistory();

  return (
    <Navbar className="navbar" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand>NOTFLIX</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {user ? (
            <LinkContainer to="/favorites">
              <Nav.Link>{user.username}'s Favorites</Nav.Link>
            </LinkContainer>
          ) : null}
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
            <>
              <LinkContainer exact to="/">
                <Nav.Link
                  title="Sign Out"
                  onClick={signOut}
                  style={{ color: "rgba(0,0,0,.5)" }}
                >
                  Sign Out
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title="Edit User">
                <EditUser handleEdit={handleEdit} user={user} />
              </NavDropdown>
            </>
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
        <GoSearch style={{ marginRight: "10px" }} />
        <Form
          inline
          onSubmit={(e) => (handleSearch(e), history.push("/search"))}
        >
          <FormControl
            type="text"
            placeholder="Search by title"
            Search
            by
            title
            className="nav-search mr-sm-2"
            name="search"
          />
          {/* <Button type="submit" variant="dark">
            Search
          </Button> */}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
