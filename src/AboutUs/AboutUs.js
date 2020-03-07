import React, { Fragment } from "react";
import Information from "./components/Infomation";
import Middle from "./components/Middle";
import Question from "./components/Question";
import SecondaryHeader from "../PageLayout/Header/SecondaryHeader";
import Ingredient from "../PageLayout/Footer/Ingredient";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";

const AboutUs = () => (
  <div className="about-container">
    <>
      <PizzamenuSidebar />
      <SecondaryHeader headername="About Us" />
      <Information />
      <Middle />
      <Question />
      <Ingredient />
    </>
  </div>
);

export default AboutUs;
