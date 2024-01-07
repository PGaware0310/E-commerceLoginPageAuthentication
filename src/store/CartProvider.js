import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.title === item.title);

  if (existingItemIndex !== -1) {
    alert("Product is already in the cart");
  } else {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...item, quantity: 1 },
    ]);
  }
        
  };
  const updateQuantity = (index, newQuantity) => {
    const updatedItems = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

   const cartContext = {
    items: cartItems,
    addItems: addToCart,
    // removeItems:removeItemToCart,
    updateQuantity: updateQuantity,
  };
return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)

};

export default CartProvider;
