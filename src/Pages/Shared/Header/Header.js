import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

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
              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  <span className="link">Login</span>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
