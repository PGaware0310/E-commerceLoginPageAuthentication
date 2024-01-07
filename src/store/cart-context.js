import { createContext } from "react";

const CartContext=createContext({
    items:[],
    addItems:(item)=>{},
    removeItem:(id)=>{},
});

export default CartContext;