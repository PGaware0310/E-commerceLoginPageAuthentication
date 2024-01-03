import { Container, Image, Row, Col, Button } from "react-bootstrap";

const AlbumList = () => {
  return (
    <>
      <Container>
        <Col>
          <Row>
            <h2
              className="text-center"
              style={{ fontFamily: "-moz-initial", fontWeight: "bold" }}
            >
              Music
            </h2>
          </Row>
        </Col>
        <Row>
          <Col className="p-4 text-center">
            <h5>Colors</h5>
            <Image
              className="p-4 text-center"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
              thumbnail
            />
            <div className="p-4 text-center">
              100<Button style={{background:"hsl(175, 76%, 50%)"}}>ADD TO CART</Button>
            </div>
          </Col>
          <Col className="p-4 text-center">
            <h5>Black and white Colors</h5>
            <Image
              className="p-4 text-center"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
               thumbnail
            />
            <div className="p-4 text-center">
              50<Button style={{background:"hsl(175, 76%, 50%)"}}>ADD TO CART</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="p-4 text-center">
            <h5>Yellow and Black Colors</h5>
            <Image
              className="p-4 text-center"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
               thumbnail
            />
            <div className="p-4 text-center">
              70<Button style={{background:"hsl(175, 76%, 50%)"}}>ADD TO CART</Button>
            </div>
          </Col>
          <Col className="p-4 text-center">
            <h5>Blue Color</h5>
            <Image
              className="p-4 text-center"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
              thumbnail
            />
            <div className="p-4 text-center">
              100<Button style={{background:"hsl(175, 76%, 50%)"}}>ADD TO CART</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Col className="text-center p-3 mb-2">
        <Button style={{background:"gray",color:"hsl(175, 76%, 50%)",fontWeight:"bold"}}>See The Cart</Button>
      </Col>
    </>
  );
};

export default AlbumList;
