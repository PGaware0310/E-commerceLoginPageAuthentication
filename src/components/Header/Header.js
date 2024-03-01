import { Navbar, Container, Nav } from "react-bootstrap";
import NavBarCartButton from "./NavBarCartButton";
import React from "react";
import { NavLink ,Link} from "react-router-dom";


const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark" sticky="top">
        <Container>
          <Nav>
            <NavLink  className="m-2" to="/" style={{textDecoration:"none",color:"white"}} end>
              HOME
              </NavLink>
            <NavLink  className="m-2" to="/store" style={{textDecoration:"none",color:"white"}} end>
              STORE
           </NavLink>
            <NavLink  className="m-2" to="/about" style={{textDecoration:"none",color:"white"}} end> 
              ABOUT
            </NavLink>
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
