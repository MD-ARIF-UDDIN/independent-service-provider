import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Navbar
        className="p-4"
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand as={Link} to="/">
            <span className="title">Lens King</span>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <span className="link">Home</span>
              </Nav.Link>
              <Nav.Link as={Link} to="checkout">
                <span className="link"> CheckOut</span>
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                <span className="link">Blogs</span>
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                <span className="link">About</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
