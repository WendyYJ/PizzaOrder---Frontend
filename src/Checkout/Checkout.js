import React from "react";
import "./Checkout.scss";
import LinkHeader from "../PageLayout/Header/LinkHeader";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import ShoppingCartSidebar from "../PageLayout/ShoppingCartSidebar/ShoppingCartSidebar";
import BillingForm from "./BillingForm";
import Footer from "../PageLayout/Footer/Footer";

const Checkout = () => (
  <div className="checkout-container">
    <PizzamenuSidebar />
    <ShoppingCartSidebar />
    <LinkHeader headername="Checkout" />
    <div className="left-container">
      <div className="horizonbar-left">
        <p>
          Returning customer? <span>Click here to login</span>
        </p>
      </div>
      <h2 className="bill-title">Billing Details</h2>
      <BillingForm />
    </div>

    <div className="right-container">
      <div className="horizonbar-right">
        <p>
          Have a coupon? <span>Click here to enter your code</span>
        </p>
      </div>
    </div>

    <div className="footer-container"> 
     <Footer/>
    </div>
  </div>
);

export default Checkout;
