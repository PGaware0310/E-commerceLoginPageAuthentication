import { useContext} from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
const itemLists=[
  {
    title:"Colors",
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    price:100,
  },
  {
    title:"Black and white Colors",
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    price:50,
  },
  {
    title:"Yellow and Black Colors",
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    price:70,
  },
  {
    title:"Blue Color",
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    price:100,
  }
]
const AlbumList = (props) => {

  const cartCnt=useContext(CartContext);

  const addToCartHandler = (item) => {
    cartCnt.addItems(item);
  };

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
        <Row>{ itemLists.map((item,index)=>(
          <Col key={index} className="p-4 text-center">
            <h5>{item.title}</h5>
            <Image
              className="p-4 text-center"
              src={item.imageUrl}
              thumbnail
            />
            <div className="p-4 text-center">
             Rs.{item.price} <Button style={{background:"hsl(175, 76%, 50%)"}} onClick={() => addToCartHandler(item)}>ADD TO CART</Button>
            </div>
          </Col>
          ))}
        </Row>
      </Container>
      <Col className="text-center p-3 mb-2">
        <Button style={{background:"gray",color:"hsl(175, 76%, 50%)",fontWeight:"bold"}} >See The Cart</Button>
  </Col>
  

    </>
  );
};

export default AlbumList;
