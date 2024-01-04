import Cart from "../Cart/Cart";
import { Navbar,Container,Nav } from "react-bootstrap";
import { useState } from "react";
const NavBar=(props)=>{
  const [showCart, setShowCart] = useState(false);
    return(
        <>
            <Navbar bg="dark" expand="sm" variant="dark" sticky="top">
        <Container>
          <Nav>
            <Nav.Link className='m-2' href="#home">HOME</Nav.Link>
            <Nav.Link className='m-2' href="#store">STORE</Nav.Link>
            <Nav.Link className='m-2' href="#about">ABOUT</Nav.Link>
          </Nav>
          <Cart />
        </Container>
      </Navbar>
        </>
    );
};

export default NavBar;