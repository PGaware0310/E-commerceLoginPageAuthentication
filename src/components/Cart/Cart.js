import { Button, Row, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="bg-dark"
        style={{ border: "1px solid hsl(175, 76%, 50%)" }}
        onClick={handleShow}
      >
        Cart0
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3 className="text-center" style={{fontFamily:"cursive"}}>CART</h3>

        <Row>
          <Col>Item</Col>
          <Col>Price(Rs.)</Col>
          <Col>Quantity</Col>
          </Row>
        <Row>
         {cartElements.map((items,index)=>(
           
                <Row key={index}>
                <Col>{items.title}</Col>
                <Col>{items.price}</Col>
                <Col>{items.quantity}</Col>
                <Button style={{background:"gray"}}>RemoveItem</Button>
                </Row>
           ))}
           </Row>
           <Button className="p-2 mt-5" style={{marginLeft:"40%",background:"hsl(175, 60%, 25%)"}}>PURCHASE</Button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
