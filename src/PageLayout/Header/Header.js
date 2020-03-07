import React from "react";
// import '../../PizzaMenu/Style/pizzamenu.scss';
import "../Style/TopHeader.scss";
import cart from "../../asset/icon/header_cart.png";

const Header = () => (
  <div className="header">
    <header>
      <h3>Margherita</h3>
      <img src={cart} alt="header_cart" id="header_cart" />
    </header>
  </div>
);

export default Header;
