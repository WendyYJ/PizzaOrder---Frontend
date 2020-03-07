import React, { Fragment } from "react";
import Filter from "./Components/Filter";
import SecondaryHeader from "../PageLayout/Header/SecondaryHeader";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";

const PizzaMenu = () => (
  <div className="Catalog-container">
    <>
      <PizzamenuSidebar />
      <SecondaryHeader headername="Pizza Menu" />
      <Filter />
    </>
  </div>
);

export default PizzaMenu;
