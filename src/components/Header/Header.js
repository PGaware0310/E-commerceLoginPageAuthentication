import { Navbar, Container, Nav } from "react-bootstrap";
import NavBarCartButton from "./NavBarCartButton";
import React from "react";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark" sticky="top">
        <Container>
          <Nav>
            <Nav.Link className="m-2" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="m-2" href="#store">
              STORE
            </Nav.Link>
            <Nav.Link className="m-2" href="#about">
              ABOUT
            </Nav.Link>
          </Nav>
          <NavBarCartButton />
        </Container>
      </Navbar>
      <h1
        className="text-center p-4"
        style={{ color: "white", fontSize: "5rem", background: "gray" }}
      >
        The Generics
      </h1>
    </>
  );
};

export default Header;
