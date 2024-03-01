import { Button, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const crtCnt = useContext(CartContext);

  const handleQuantityChange = (e, index) => {
    const newQuantity = parseInt(e.target.value); // Parse the input value into an integer
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      crtCnt.updateQuantity(index, newQuantity); // Update the quantity using the context function
    }
  };

  const handleInputFocus = (e) => {
    e.target.value = ""; // Clear the input value on focus
  };

  const cartItems = crtCnt.items.map((item, index) => (
    <Row key={index} className="p-3">
      <Col><Row>
        <img
          src={item.imageUrl}
          alt={item.title}
          className="rounded-3"
          style={{ width: "65px"}}
        ></img>
        <Col>{item.title}</Col></Row>
      </Col>
      {/* <Col></Col> */}
      <Col>{item.price}</Col>
      <Col><Row md={2}>
        <input
          type="text"
          style={{ width: "3rem" }}
          value={item.quantity}
          onChange={(e) => handleQuantityChange(e, index)}
          onFocus={handleInputFocus}
        />
        <Col>
          <Button style={{ background: "gray" }}>Remove</Button>
        </Col></Row>
      </Col>
    </Row>
  ));

  return <>{cartItems}</>;
};

export default Cart;
