import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';

const TopNavbar = () => {
  return (
    <Navbar expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Innover Digital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
