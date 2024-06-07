import { useParams } from "react-router-dom";
import { itemLists } from "./Albums";
import { Image, Col, Row, Container, Button } from "react-bootstrap";
import NavBarr from "../../Navigation/NavBarr";

const AlbumDetails = () => {
  let { productId } = useParams();
  console.log("Product ID:", productId);
  const product = itemLists.find((item) => item.id === Number(productId));
  return (
    <>
      <NavBarr />
      {console.log(product)}
      <Container className="p-4">
        <Row>
          <Col>
            {product && product.images
              ? product.images.map((image, index) => (
                  <Row>
                    <Image
                      key={index}
                      src={image}
                      thumbnail
                      style={{ border: "none", width: "30%", margin: "0.5rem" }}
                    />
                  </Row>
                ))
              : "No images available"}
          </Col>
          <Col>
            <Image
              src={product ? product.imageUrl : "Image not Available"}
            ></Image>
          </Col>
          <Col>
            <h4>{product ? product.title : "Product not found"}</h4>
            <p>Rs.{product.price}</p>
            <Button
              style={{
                background: "hsl(175, 76%, 50%)",
                border: "none",
                fontWeight: "bold",
                boxShadow: "0 0 50px rgb(189, 147, 231)",
              }}
            >
              ADD TO CART
            </Button>
            <h3>Reviews</h3>
            <div>
              {product && product.reviews
                ? product.reviews.map((review, index) => (
                    <p key={index}>{review}</p>
                  ))
                : "No reviews available"}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AlbumDetails;
