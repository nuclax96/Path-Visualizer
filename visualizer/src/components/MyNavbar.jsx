import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Path Visualization</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dijkstras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">A*</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Breadth First Search (BFS)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
