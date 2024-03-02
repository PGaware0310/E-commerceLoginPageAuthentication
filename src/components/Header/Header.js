import React from "react";
import Generics from "./Generics";
import Home from "../../Home/Home";
import NavBarr from "../../Navigation/NavBarr";

const Header = () => {
  return (
    <>
      <NavBarr/>
      <Generics/>
      <Home/>
    </>
  );
};

export default Header;
