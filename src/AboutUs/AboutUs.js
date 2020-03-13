import React, { Fragment } from "react";
import Information from "./components/Infomation";
import Middle from "./components/Middle";
import Question from "./components/Question";
import LinkHeader from "../PageLayout/Header/LinkHeader";
import Ingredient from "../PageLayout/Footer/Ingredient";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import ShoppingCartSidebar from "../PageLayout/ShoppingCartSidebar/ShoppingCartSidebar";
import Footer from "../PageLayout/Footer/Footer";

const AboutUs = () => (
  <div className="about-container">
    <Fragment>
      <PizzamenuSidebar />
      <ShoppingCartSidebar />
      <LinkHeader headername="About Us" />
      <Information />
      <Middle />
      <Question />
      <Ingredient />
      <Footer />
    </Fragment>
  </div>
);

export default AboutUs;
