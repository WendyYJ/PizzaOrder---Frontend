import React from "react";
import './Checkout.scss';
import LinkHeader from "../PageLayout/Header/LinkHeader";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import ShoppingCartSidebar from "../PageLayout/ShoppingCartSidebar/ShoppingCartSidebar";


const Checkout = () => (
  <div className="checkout-container">
    <PizzamenuSidebar />
    <ShoppingCartSidebar />
    <LinkHeader headername="Checkout" />

  </div>
);


export default Checkout;