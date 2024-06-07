import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

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

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  }

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  }

   const cartContext = {
    items: cartItems,
    addItems: addToCart,
    // removeItems:removeItemToCart,
    updateQuantity: updateQuantity,
    purchaseItem:purchaseItem,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)

};

export default CartProvider;
