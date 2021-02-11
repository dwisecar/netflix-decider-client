import React from 'react';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'



const NavBar = ({setGenre}) => {
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
                <LinkContainer to='/movies/comedies'><NavDropdown.Item onClick={() => setGenre('comedies')}>Comedy</NavDropdown.Item></LinkContainer>
                <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sci-Fi / Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Documentary</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Classic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Kids & Family</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TV" id="basic-nav-dropdown">
            <LinkContainer to='/tv_shows/comedies'><NavDropdown.Item onClick={() => setGenre('comedies')}>Comedy</NavDropdown.Item></LinkContainer>
                <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sci-Fi / Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Documentary</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Classic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Kids & Family</NavDropdown.Item>
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