import Cart from "../Cart/Cart";
import { Button,Row,Offcanvas,Col } from "react-bootstrap";
import { useContext, useState,useEffect } from "react";
import CartContext from "../../store/cart-context";

const NavBarCartButton=(props)=>{
  const [show, setShow] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const crtCnt=useContext(CartContext);

  useEffect(() => {
    let quantity = 0;
    crtCnt.items.forEach((item) => {
      quantity += item.quantity;
    });
    setTotalQuantity(quantity);
  }, [crtCnt.items]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalAmount = crtCnt.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const setPurchase=()=>{
    crtCnt.purchaseItem();
  }
    return(
        <>
        
       <Button
        className="bg-dark"
        style={{ border: "1px solid hsl(175, 76%, 50%)" }}
        onClick={handleShow}>
        Cart{totalQuantity}
       </Button><Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="text-center" style={{ fontFamily: "cursive" }}>
              CART
            </h3>
            <Row style={{ borderBottomStyle:"solid", borderWidth:"1px"}}>
              <Col>Item</Col>
              <Col>Price(Rs.)</Col>
              <Col>Quantity</Col>
            </Row>

            <Row>
          <Cart/>
            {console.log("Inside Cart",crtCnt)}
            </Row>
            <Row className="float-end p-4">
              Total:Rs.{totalAmount.toFixed(2)}
            </Row>
            <Button
              className="p-2 mt-5"
              style={{ marginLeft: "40%", background: "hsl(175, 76%, 50%)",border:"none",fontWeight:"bold" }}
              onClick={setPurchase}
            >
              PURCHASE
            </Button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
        </>
    );
    
};

export default NavBarCartButton;