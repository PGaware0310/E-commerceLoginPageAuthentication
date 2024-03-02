import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavBarCartButton from "../components/Header/NavBarCartButton";
const NavBarr=()=>{
    return(
<>
<Navbar bg="dark" expand="sm" variant="dark" sticky="top">
        <Container>
          <Nav>
            <NavLink  className="m-3" to="/" style={{textDecoration:"none",color:"white"}} end>
              HOME
              </NavLink>
            <NavLink  className="m-3" to="/store" style={{textDecoration:"none",color:"white"}} end>
              STORE
           </NavLink>
            <NavLink  className="m-3" to="/about" style={{textDecoration:"none",color:"white"}} end> 
              ABOUT
            </NavLink>
          </Nav>
          <NavBarCartButton/>
        </Container>
      </Navbar>
</>
    )
};

export default NavBarr;