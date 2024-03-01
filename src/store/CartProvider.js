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
    console.log(`your product ${item.title} is added to cart`);
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

  const purchaseItem=()=>{
setCartItems([]);    
  }
   const cartContext = {
    items: cartItems,
    addItems: addToCart,
    // removeItems:removeItemToCart,
    updateQuantity: updateQuantity,
    purchaseItem:purchaseItem,
  };
return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)

};

export default CartProvider;
