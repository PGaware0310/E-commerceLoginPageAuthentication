import { createContext } from "react";

const CartContext=createContext({
    items:[],
    addItems:(item)=>{},
    removeItem:(id)=>{},
    token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default CartContext;