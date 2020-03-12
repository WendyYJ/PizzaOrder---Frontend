import React, { Fragment } from "react";
import "./ShoppingCart.scss";
import FourthHeader from "../PageLayout/Header/FourthHeader";
import Cart from "../PageLayout/Cart";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";

const ShoppingCart = () => (
  <div className="shoppingCart-container">
    <Fragment>
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
    </Fragment>
    <div />
  </div>
);

export default ShoppingCart;
