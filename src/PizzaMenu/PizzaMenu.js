import React, { Fragment } from "react";
import Filter from "./Components/Filter";
import LinkHeader from "../PageLayout/Header/LinkHeader";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import ShoppingCartSidebar from "../PageLayout/ShoppingCartSidebar/ShoppingCartSidebar";

const PizzaMenu = () => (
  <div className="Catalog-container">
    <Fragment>
      <PizzamenuSidebar />
      <ShoppingCartSidebar />
      <LinkHeader headername="Pizza Menu" />
      <Filter />
    </Fragment>
  </div>
);

export default PizzaMenu;
