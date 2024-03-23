import { Container } from "react-bootstrap";
import NavBarr from "../../Navigation/NavBarr";
import Generics from "../Header/Generics";
import ContactForm from "./ContactForm";
const ContactUs = (props) => {
    
  return (
    <>
      <NavBarr />
      <Generics />
      <h1
        className="text-center mb-4"
        style={{
          fontFamily: "-moz-initial",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        CONTACT US
      </h1>
      <Container
        className="p-4"
        style={{
          textAlign: "left",
          fontWeight: "bold",
          background: "gray",
          width: "50%",
          padding: "4px",
          borderRadius: "12px",
          boxShadow: "0 0 50px rgb(189, 147, 231)",
        }}
      >
        <ContactForm/>
      </Container>
    </>
  );
};

export default ContactUs;
