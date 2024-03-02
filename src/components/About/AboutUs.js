import { Container } from "react-bootstrap";
import Footer from "../Header/Footer";
import { Image, Row, Col } from "react-bootstrap";
import NavBarr from "../../Navigation/NavBarr";
import Generics from "../Header/Generics";

const AboutUs = (props) => {
  return (
    <>
      <NavBarr/>
      <Generics/>
      <h1
        className="text-center mb-4"
        style={{
          fontFamily: "-moz-initial",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        ABOUT
      </h1>
      <Container>
      <Row className="mb-4">
        <Col  md={3}>
          <Image 
            style={{ height: 260, width: 260 }}
            src="https://media.istockphoto.com/id/1192266874/photo/emotional-friends-listening-music-in-headphones-and-dancing-together-isolated-on-yellow.jpg?s=612x612&w=0&k=20&c=h5SGzMM8BbY76jSpZUZzwsxMFJTSEAgHLdaiHfVJ0Ys="
            roundedCircle
          ></Image>
        </Col>
        <Col>
          <p>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings. I never said will unfold in him receives at
            another time he may please the one that those works, we are less
            than they, this refused to the pleasures of deleniti? Those are!
            Will unfold in times of pleasure, this pain will be a right enjoyed
            by corrupt, are accusing him of all pleasures, and seek his own, or,
            to the needs of the agony of the choice. We hate the fellow. Lorem
            ipsum dolor, sit amet consectetur rebates. The distinction, that
            arise from or to. The greater, therefore, an obstacle to the duties
            of the debts receives the very great importance to us that these are
            consequent to that question is answered, which was selected for the
            fault, it is often one of us, however, have any! Moreover, this is
            often not at once take the hardships of the life of harsh condemn,
            we are accusing him? Him whom something large cisterns.
          </p>
        </Col>
      </Row></Container>
      <Footer />
    </>
  );
};

export default AboutUs;
