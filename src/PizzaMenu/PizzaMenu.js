import React, { Fragment } from "react";
import Filter from "./Components/Filter";
import LinkHeader from "../PageLayout/Header/LinkHeader";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";

const PizzaMenu = () => (
  <div className="Catalog-container">
    <>
      <PizzamenuSidebar />
      <LinkHeader headername="Pizza Menu" />
      <Filter />
    </>
  </div>
);

export default PizzaMenu;
