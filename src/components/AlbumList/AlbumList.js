import { useContext } from "react";
import Footer from "../Header/Footer";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import NavBarr from "../../Navigation/NavBarr";
import Generics from "../Header/Generics";
import { itemLists } from "./Albums";
import { Link } from "react-router-dom";

const AlbumList = (props) => {
  const cartCnt = useContext(CartContext);

  const addToCartHandler = (item) => {
    cartCnt.addItems(item);
  };

  return (
    <>
      <NavBarr />
      <Generics />
      <Container>
        <Col>
          <Row>
            <h2
              className="text-center p-4"
              style={{ fontFamily: "-moz-initial", fontWeight: "bold" }}
            >
              Music
            </h2>
          </Row>
        </Col>
        <Row>
          {itemLists.map((item, index) => (
            <Col key={index} className="p-4 text-center" md={6}>
              <h5>{item.title}</h5>
              <br />
              <Link to={`/store/${item.id}`}>
                <Image
                  className="text-center"
                  src={item.imageUrl}
                  thumbnail
                  style={{ border: "none", width: "50%" }}
                />
             </Link>
              <div className="p-4">
                Rs.{item.price}
                <Button
                  style={{
                    background: "hsl(175, 76%, 50%)",
                    border: "none",
                    fontWeight: "bold",
                     boxShadow: "0 0 50px rgb(189, 147, 231)"
                  }}
                  onClick={() => addToCartHandler(item)}
                >
                  ADD TO CART
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Col className="text-center p-3 mb-2">
        <Button
          style={{
            background: "gray",
            color: "hsl(175, 76%, 50%)",
            fontWeight: "bold",
            border: "none",
            boxShadow: "0 0 50px rgb(189, 147, 231)"
          }}
        >
          See The Cart
        </Button>
      </Col>
      <Footer />
    </>
  );
};

export default AlbumList;
