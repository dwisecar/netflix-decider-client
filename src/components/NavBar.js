import React from 'react';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = ({setGenre, movieGenres, showGenres}) => {
  return (
    <div className='navbar'>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">NETFLIX DECIDER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/favorites'>
                <Nav.Link>Favorites</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
                {movieGenres.map(genre => <LinkContainer to={`/movies/${genre.toLowerCase()}`}><NavDropdown.Item onClick={() => setGenre(genre)}>{genre}</NavDropdown.Item></LinkContainer>)}
            </NavDropdown>
            <NavDropdown title="TV" id="basic-nav-dropdown">
              {showGenres.map(genre => <LinkContainer to={`/tv_shows/${genre.toLowerCase()}`}><NavDropdown.Item onClick={() => setGenre(genre)}>{genre}</NavDropdown.Item></LinkContainer>)}
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavBar;