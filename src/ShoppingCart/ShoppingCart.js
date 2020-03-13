import React, { Fragment } from "react";
import "./ShoppingCart.scss";
import FourthHeader from "../PageLayout/Header/FourthHeader";
import Footer from "../PageLayout/Footer/Footer";
import Cart from "../PageLayout/Cart";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import ShoppingCartSidebar from "../PageLayout/ShoppingCartSidebar/ShoppingCartSidebar";

const ShoppingCart = () => (
  <div className="shoppingCart-container">
    <Fragment>
      <ShoppingCartSidebar />
      <PizzamenuSidebar />
      <FourthHeader headername="Shopping Cart" style={{ width: "100%" }} />
      <div className="shoppingCart1">
        <div className="horizonbar-Three">
          <p>PRODUCT</p>
          <span className="price">
            <p>PRICE</p>
          </span>
          <p>QTY</p>
          <p>TOTAL</p>
        </div>
        <Cart />
      </div>
      <div className="footer-container">
      <Footer />
      </div>
    </Fragment>
    <div />
  </div>
);

export default ShoppingCart;
