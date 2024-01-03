import { Navbar,Container,Nav,Button } from "react-bootstrap";
const NavBar=()=>{
    return(
        <>
            <Navbar bg="dark" expand="sm" variant="dark" sticky="top">
        <Container>
          <Nav>
            <Nav.Link className='m-2' href="#home">HOME</Nav.Link>
            <Nav.Link className='m-2' href="#store">STORE</Nav.Link>
            <Nav.Link className='m-2' href="#about">ABOUT</Nav.Link>
          </Nav>
          <Button className='bg-dark' style={{border:"1px solid hsl(175, 76%, 50%)"}}>Cart0</Button>
        </Container>
      </Navbar>
        </>
    );
};

export default NavBar;